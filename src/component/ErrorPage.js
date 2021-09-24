import React from "react";

function ErrorPage () {
    return (
        <>
            <p className="title-error">404</p>
            <p className="paragraph-error">Oops! Something went wrong!</p>
            <a href="/" className= "btn-error">return to home</a>
        </>
        );

}

export default ErrorPage