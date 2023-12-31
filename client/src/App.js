import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Post from './components/Post';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Page404 from './components/Page404';

function App() {
  let [blogs, setBlogs] = useState();
  useEffect(() => {
    fetch('https://mern-blog-tsm.onrender.com/api/v1', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => setBlogs([...json]));
  });
  function setContent(tabName) {
    switch (tabName) {
      case 'Home':
        return <Home blogs={blogs} onClick={onClickReadMoreHandler} />;
      case 'Post':
        return <Post setHome={redirectHome} />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Blog':
        return <Blog id={selectedId} setHome={redirectHome} />;
      default:
        return <Page404 />;
    }
  }

  const [tab, setTab] = useState('Home');

  const redirectHome = () => {
    setTab('Home');
  };

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
