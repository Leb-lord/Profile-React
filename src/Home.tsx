import React, { useState, useEffect } from "react";
import './Home.css';
import About from './About';
import { Link } from "react-router-dom";
import me from './me.jpg';
import face from './face.png';
import gmail from './gmail.png';
import whats from './whats.png';
import insta from './insta.png';

export function Home() {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    };

    const [displayedText, setDisplayedText] = useState(''); // Current visible text
    const fullText = "My name is Hassan Yazbek from Lebanon, living in Beirut. I am a graduate of Lebanese University with a degree in Mathematics and Computer Science. I pursued these two majors to combine mathematics and computer technologies to solve present-day problems and reduce the gap between present and future.";

    useEffect(() => {
        let index = 0;

        const typeWriter = () => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(interval); // Clear interval when done
            }
        };

        const interval = setInterval(typeWriter, 15); // Adjust typing speed here

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <div>
            <div className="col">
                <nav>
                    <p className="menue">
                        <a href="#home" className="menue act">Home</a>
                        <a href="/cv.pdf" className="menue" download>Resume</a>
                        <Link to="/about" className="menue">About</Link>
                    </p>
                </nav>

                <div className="content">
                    <div className="summary">
                        <img className="me" src={me} alt="Hassan Yazbek" />
                        <div className="intro-text">
                            <h1 className="name">Hassan Yazbek</h1>
                            <h2 className="subname">FULL STACK WEB DEVELOPER</h2>
                            <p>{displayedText}</p> {/* Animated paragraph */}
                            <div id="details"><img id="social" src={whats} alt="WhatsApp"/><p onClick={() => copyToClipboard("+961 71879101")}> +961 71879101</p></div>
                            <div id="details"><img id="social" src={face} alt="Facebook"/><p onClick={() => copyToClipboard("Hassan Yazbek")}> Hassan Yazbek</p></div>
                            <div id="details"><img id="social" src={insta} alt="Instagram"/><p onClick={() => copyToClipboard("hassan_yzzbk")}> hassan_yzzbk</p></div>
                            <div id="details"><img id="social" src={gmail} alt="Gmail"/><p onClick={() => copyToClipboard("hassan_yazbek.72@gmail.com")}> hassan_yazbek.72@gmail.com</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
