import React from 'react';

import ToDo from './components/todo/todo.jsx';
import Header from './components/header/header.jsx';
import LoginProvider from './context/auth/context.js';

export default function App() {

    return (

        <>
            <Header />
            <LoginProvider>
                <ToDo />
            </LoginProvider>
        </>

    );

};
