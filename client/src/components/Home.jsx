import React from 'react';
import Card from './UI/Card';

const Home = (props) => {
  return (
    <Card>
      {props.blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.content.substring(0,50)} <span className='read-more'>Read More-{`>`}</span> </p>
        </div>
      ))}
    </Card>
  );
};

export default Home;
