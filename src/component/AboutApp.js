import React from "react";
import logo from "./Asset2.png"

function AboutApp () {
    return (
    <>
        <nav className="nav-about">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about/about-app" className="nav-about-active">About App</a></li>
                <li><a href="/about/about-author">About Author</a></li>
            </ul>
        </nav>
        <h1 className="title-about">About the App</h1>
        <p className="paragraph-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores ipsam officiis consectetur molestiae, exercitationem similique id saepe doloremque veniam porro corporis ut earum dicta eius impedit nam repellat quos?</p>
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

export default AboutApp