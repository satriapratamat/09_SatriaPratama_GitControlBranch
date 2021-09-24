import React from "react";
import logo from "../Asset1.png"

function AboutAuthor () {
    return (
        <>
            <nav className="nav-about">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about/about-app">About App</a></li>
                    <li><a href="/about/about-author" className="nav-about-active">About Author</a></li>
                </ul>
            </nav>
            <h1 className="title-about">About the Author</h1>
            <p className="paragraph-about">This app was developed by Satria, a self-taught web developer and technical writer.</p>
            <footer>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4"><img className="footer-about" src={logo} alt="toDo"></img></div>
                </div>
            </footer>
        </>
        );

}

export default AboutAuthor