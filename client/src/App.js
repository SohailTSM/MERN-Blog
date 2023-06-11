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
  function setContent(tabName) {
    switch (tabName) {
      case 'Home':
        return <Home />;
      case 'Post':
        return <Post />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Blog':
        return <Blog />;
      default:
        return <Page404 />;
    }
  }

  const [tab, setTab] = useState('Home');

  return (
    <div>
      <Navbar />
      {setContent(tab)}
      <Footer />
    </div>
  );
}

export default App;
