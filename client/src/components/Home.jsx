import React from 'react';
import Card from './UI/Card';

const Home = (props) => {
  return (
    <Card className='card'>
      {props.blogs ? props.blogs.map((blog, index) => (
        <div key={blog._id} className='card-items'>
          <h2>{blog.title}</h2>
          <p>
            {blog.content.substring(0, 50)}{' '}
            <span
              id={blog.id}
              className='read-more'
              onClick={() => props.onClick(blog._id)}
            >{`Read More->`}</span>{' '}
          </p>
          {index !== props.blogs.length - 1 && <hr />}
        </div>
      )) : `Loading..`}
    </Card>
  );
};

export default Home;
