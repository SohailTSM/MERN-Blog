import React from 'react';
import Card from './UI/Card';

const Home = (props) => {
  return (
    <Card>
      {props.blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            {blog.content.substring(0, 50)}{' '}
            <span
              id={blog.id}
              className='read-more'
              onClick={() => props.onClick(blog.id)}
            >{`Read More->`}</span>{' '}
          </p>
        </div>
      ))}
    </Card>
  );
};

export default Home;
