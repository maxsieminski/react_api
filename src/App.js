import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState({});
  const [profile, setProfile] = useState({});
  var choice = "posts";

  useEffect(() => {;
    fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setPosts({...posts, "posts": data}))
    fetch("http://localhost:3001/comments").then(response => response.json()).then(data => setComments({...comments, "comments": data}));
    fetch("http://localhost:3001/profile").then(response => response.json()).then(data => setProfile({...profile, "profile": data}));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Sidebar">
        <button className="Get-button">Posts</button>
        <button className="Get-button">Comments</button>
        <button className="Get-button">Profiles</button>
      </div>
      <div className="Main">
        <br/><br/>
        <p>{choice}</p><br/>
        <p>{posts.id}</p><br/>
        <p>{posts.title}</p>
      </div>
    </div>
  );
}

export default App;
