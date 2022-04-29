import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import "./Homepage.css";
import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import { auth, db, logout } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
function Homepage() {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "8d858bcf-4ccf-4109-a54b-0c8313bf9f8b"
            userName = "admin"
            userSecret = "123zxcv"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}    
        />
    );
};
  // const [user, loading, error] = useAuthState(auth);
  // const [name, setName] = useState("");
  // const history = useNavigate();
  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const querySnapshot = await getDocs(q);
  //     setName(querySnapshot.docs[0].data().name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };
  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return history.replace("/");
  //   fetchUserName();
  // }, [user, loading]);
  // return (
  //   <div className="dashboard">
  //     <div className="dashboard__container">
  //       Logged in as
  //       <div>{name}</div>
  //       <div>{user?.email}</div>
  //       <button className="dashboard__btn" onClick={logout}>
  //         Logout
  //       </button>
  //     </div>
  //   </div>
  // );

export default Homepage;