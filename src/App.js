import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

const initEl = {"id": null, "title":""};

function App() {
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState({});
  const [profile, setProfile] = useState({});
  const [currentElement, setCurrentElement] = useState(initEl); 

  useEffect(() => {;
    fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setPosts(data));
    fetch("http://localhost:3001/comments").then(response => response.json()).then(data => setComments(data));
    fetch("http://localhost:3001/profile").then(response => response.json()).then(data => setProfile(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Sidebar">
        <button className="Get-button" onClick={() => setCurrentElement(posts)}>Posts</button>
        <button className="Get-button" onClick={() => setCurrentElement(comments)}>Comments</button>
        <button className="Get-button" onClick={() => setCurrentElement(profile)}>Profiles</button>
      </div>
      <div className="Main">
        <br/>
        <p>{currentElement["title"]}</p><br/>
      </div>
    </div>
  );
}

export default App;
