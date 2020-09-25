import React, { useState, Fragment, useContext } from 'react';
import './Login.css';
import { Form, Container, Button } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error:'',
        success: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName, email} = res.user;
            console.log(displayName, email); 
            const newUserInfo = {
                isSignedIn: true,
                email:email,
                name: displayName
            };    
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
        })
        .catch(error => {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo); 
        });
    };

    var facebookprovider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignin = () => {
        firebase.auth().signInWithPopup(facebookprovider)
        .then(function(result) {
            var newUserInfo = result.user;
            console.log(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
        })
        .catch(function(error) {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo); 
        });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;

        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if(!isFieldValid){
                alert("enter valid email address");
            }
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 5 && e.target.value.length < 20;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            if(!isFieldValid){
                alert("password length should be more than 5 charecter and contains at least one number");
            }
        }
        if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        }
    };

    const varifyEmail = () => {
        let user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
        });
    };

    const resetPassword = (email) => {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(user.email).then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
        });
    };

    const handleSubmit = (e) =>{
        if(newUser && user.email && user.password){
            const pass = document.getElementById("password");
            const confpass = document.getElementById("confirmPassword");
            if(pass.value === confpass.value){
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = {...user};
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    varifyEmail();
                })
                .catch(error => {
                    const newUserInfo = {...user};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
            }
            else{
                alert("Password does not match");
            }
            
        }
        
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                console.log(res)
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                
            })
            .catch(error => {
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
                        <Form.Control onBlur={handleBlur} name="email" type="text" placeholder="Username or Email" required/>
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onBlur={handleBlur} id="password" name="password" type="password" placeholder="Password" required/>
                        
                    </Form.Group>
                    { newUser &&
                        <Form.Group>
                            <Form.Control id="confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword" required/>
                        </Form.Group>
                    }
                    <hr/>
                    { !newUser &&
                        <Fragment>
                            <input type="checkbox" name="rememberPassword"/>
                            <label htmlFor="rememberPassword">Remember Me</label>
                            <button onClick={resetPassword} className="forgot-password other-link">Reset Password</button>
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