import React, { useState, Fragment } from 'react';
import './Login.css';
import { Form, Container, Button } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error:''
      });
      
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName, email} = res.user;
            console.log(displayName, email); 
            const signedInUser = {
                isSignedIn: true,
                email:email,
                name: displayName
            };    
            setUser(signedInUser);
        })
        .catch(error => {
            console.log(error);
            console.log(error.message);
        });
    };

    var facebookprovider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignin = () => {
        firebase.auth().signInWithPopup(facebookprovider)
        .then(function(result) {
            var user = result.user;
            console.log(user);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;

        if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length > 6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        }
    };

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            error: '',
            success: false
          }
          setUser(signedOutUser);
        })
        .catch(err => {
    
        })
    }

    const handleSubmit = (e) =>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch(function(error) {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch(function(error) {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }
        e.preventDefault();
    };

    const [newUser, setNewUser] = useState(false);

    return (
        <Container style={{ width: "100%"}}>
            <button onClick={handleSignOut}>Sign out</button>
            <p>email: {user.email}</p>
            <p>password: {user.password}</p>
            <div className="bg-login">
                {newUser?<h5>Create an Account</h5>:<h5>Login</h5>}
                <Form onSubmit={handleSubmit}>
                    { newUser &&
                        <Fragment>
                            <Form.Group>
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Fragment>
                    }
                    <Form.Group>
                        <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Username or Email" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" required/>
                    </Form.Group>
                    { newUser &&
                        <Form.Group>
                            <Form.Control type="password" placeholder="Confirm Password" id="myInput" required/>
                        </Form.Group>
                    }
                    <hr/>
                    { !newUser &&
                        <Fragment>
                            <input type="checkbox" name="rememberPassword"/>
                            <label htmlFor="rememberPassword">Remember Me</label>
                            <button className="forgot-password other-link">Forgot Password</button>
                        </Fragment>
                    }
                    <Form.Control className="login" type="submit" value={newUser? "Create an account" : "Login"}/>
                    <p className="create-acc">Don't have an account?<span name="newUser" onClick={()=>setNewUser(!newUser)} className="other-link">{newUser?  "Login" : "create an account"}</span></p>
                </Form>
                <p style={{color: 'red'}}>{user.error}</p>
                {user.success && <p style={{color: 'green'}}>** User {newUser ? 'created' : 'sign in'} successfully **</p>}
            </div>
            <Button onClick={handleFacebookSignin}  className="fb-login other-login">Continue with Facebook</Button><br/>
            <Button onClick={handleGoogleSignin} className="google-login other-login">Continue with Google</Button>
        </Container>
    );
};

export default Login;