import React from "react";
import './Home.css';

export function Start() {
    return (
        <div className="col">
            <div className="log">
                <p className="portofilo">Portfolio</p>
                <p className="subporto">Get My Profile</p>
                <div id="em-pass">
                    <p>
                        <label htmlFor="email">Email</label>
                        <input id="email" className="email" type="email" placeholder="Enter your email" />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input id="password" className="password" type="password" placeholder="Enter your password" />
                    </p>
                </div>
                <button type="button">Login</button>
                <p>Login using your social media:</p>
                <div className="social-buttons">
                    <button id="gmail" aria-label="Login with Gmail"></button>
                    <button id="facebook" aria-label="Login with Facebook"></button>
                    <button id="instagram" aria-label="Login with Instagram"></button>
                </div>
                <p>
                    <a href="./home">Guest?</a>
                </p>
            </div>
        </div>
    );
}

export default Start;
