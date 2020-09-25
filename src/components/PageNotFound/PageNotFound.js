import React from 'react';

const notFound = {
    textAlign: "center",
    h6: {
        color: "red",
    }
}

const PageNotFound = () => {
    return (
        <div style={notFound}>
            <h3>404</h3>
            <h6>Sorry, this page is not found</h6>
        </div>
    );
};

export default PageNotFound;