import { ChatEngine} from 'react-chat-engine';
import React from 'react';
import './App.css';
import ChatFeed from './components/ChatFeed';
import firebase from "./firebase";


//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Register from "./auth/Register";
import Login from "./auth/Login";
import Homepage from "./Homepage";


function App() {
    return (
        <div className="app">
                <Routes>
                    <Route path="/" exact element={<Login />}/>
                    <Route exact path="/homepage" element={<Homepage />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
        </div>
    );
}

export default App;
