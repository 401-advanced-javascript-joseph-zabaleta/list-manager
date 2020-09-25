import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const API = 'https://api-js401.herokuapp.com';


export const LoginContext = React.createContext();

function LoginProvider(props) {

    const [loginStatus, setLoginStatus] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState({});
    const [abilities, setAbilities] = useState([]);


    // useEffect(() => {

    //     const qs = new URLSearchParams(window.location.search);
    //     const cookieToken = cookie.load('auth');
    //     const token = qs.get('token') || cookieToken || null;
    //     validateToken(token);

    // }, [])


    function can(capability) {

        return this.state.user?.capabilities?.includes(capability);

    }


    function login(username, password) {

        const auth = { username, password };
        axios.post(`${API}/signin`, {}, { auth })
            .then(response => validateToken(response?.data?.token))
            .catch(console.error);

    };


    function logout() {
        setLoginState(false, null, {})
    };


    function validateToken(token) {

        try {
            const user = jwt.verify(token, process.env.REACT_APP_SECRET || 'supersecret');
            setLoginState(true, token, user);
        }
        catch (e) {
            setLoginState(false, null, {});
            console.log('Token Validation Error', e);
        }

    };


    function setLoginState(loginStatus, token, user) {

        cookie.save('auth', token);
        // this.setState({ token, loggedIn, user });
        setLoginStatus(loginStatus);
        setToken(token);
        setUser(user);

    };


    let state = {

        loginStatus,
        setLoginStatus,
        token,
        setToken,
        user,
        setUser,
        can
    }



    return (

        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>

    )

};

export default LoginProvider;
