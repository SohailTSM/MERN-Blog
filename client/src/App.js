import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Post from './components/Post';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Page404 from './components/Page404';

function App() {
  const blogs = [
    { id: '0', title: 'Title 1', content: 'Content 1' },
    { id: '1', title: 'Title 2', content: 'Content 2' },
  ];
  function setContent(tabName) {
    switch (tabName) {
      case 'Home':
        return <Home blogs={blogs} onClick={onClickReadMoreHandler} />;
      case 'Post':
        return <Post />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Blog':
        return <Blog id={selectedId} />;
      default:
        return <Page404 />;
    }
  }

  const [tab, setTab] = useState('Home');

  const [selectedId, setSelectedId] = useState('');

  function onClickNavItemHandler(event) {
    const requestedTab = event.target.innerHTML;
    setTab(requestedTab === 'Blog' ? 'Home' : requestedTab);
  }

  function onClickReadMoreHandler(id) {
    setSelectedId(id);
    setTab('Blog');
  }

  return (
    <div>
      <Navbar onClick={onClickNavItemHandler} />
      {setContent(tab)}
      <Footer />
    </div>
  );
}

export default App;
