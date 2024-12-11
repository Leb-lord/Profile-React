import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

function About(){
    return(
        <div className="col">
            <nav>
                <p className="menue">
                <Link to="/home" className="menue">Home</Link>
                <a href="/cv.pdf" className="menue" download>Resume</a>
                <a className="menue act">About</a>
                </p>
            </nav>
            <div className="parag">
            <h1 className="title">Full Stack Development</h1>
            <p className="details">A Full Stack Web Developer is a versatile professional skilled in both front-end and back-end web development. They work 
                with various technologies to create dynamic, responsive websites and applications. On the front end, they handle user 
                interfaces using HTML, CSS, and JavaScript frameworks like React or Vue. On the back end, they manage databases, server-side 
                logic, and application functionality using languages like Node.js, Python, or PHP and databases like MySQL, MongoDB, or 
                PostgreSQL. Full Stack Developers are proficient in bridging the gap between user experience and backend functionality, making 
                them highly valuable in building complete, end-to-end web solutions.
            </p>
            </div>



        </div>
    );
}

export default About;
