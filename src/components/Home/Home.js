import React from 'react';
import Header from '../Header/Header';
import ChooseCategory from '../ChooseCategory/ChooseCategory';

const Home = () => {
    return (
        <div className="bg">
            <div className="bg-shade">
                <Header></Header>
                <ChooseCategory />
            </div>
        </div>
    );
};

export default Home;