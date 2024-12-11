import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Start from './Login';
import Home from './Home';
import About from './About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/auth/callback" element={<Home />} />
                <Route path="/" element={<Start />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

// const CLIENT_ID = '632397976693-9jfm4diokif5eakpumo9ajheon93f3hb.apps.googleusercontent.com';

// function App() {
//   const handleLogin = (response) => {
//     console.log('Logged in user:', response.profileObj);
//   };

//   return (
//     <GoogleLogin
//       clientId={CLIENT_ID}
//       buttonText="Login with Google"
//       onSuccess={handleLogin}
//       onFailure={(error) => console.log('Login failed:', error)}
//       cookiePolicy={'single_host_origin'}
//       redirectUri="http://localhost:3000/auth/callback"
//     />
//   );
// }


export default App;
