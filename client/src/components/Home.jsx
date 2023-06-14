import React from 'react';
import Card from './UI/Card';

const Home = (props) => {
  return (
    <Card>
      {props.blogs ? props.blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>
            {blog.content.substring(0, 50)}{' '}
            <span
              id={blog.id}
              className='read-more'
              onClick={() => props.onClick(blog._id)}
            >{`Read More->`}</span>{' '}
          </p>
        </div>
      )) : `Loading..`}
    </Card>
  );
};

export default Home;
