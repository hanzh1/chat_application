import { ChatEngine} from 'react-chat-engine';
import React from 'react';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "8d858bcf-4ccf-4109-a54b-0c8313bf9f8b"
            userName = "admin"
            userSecret = "123zxcv"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}    
        />
        /*a string that pops up when creating a chat application*/
    );
};

export default App;