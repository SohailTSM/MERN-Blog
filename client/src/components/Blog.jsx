import React, { useEffect, useState } from 'react';
import Card from './UI/Card';

const Blog = (props) => {
  const [blog, setBlog] = useState({ title: '', content: '' });
  useEffect(() => {
    fetch('https://mern-blog-tsm.onrender.com/api/v1/' + props.id, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => setBlog(json));
  }, [props.id]);

  const deleteBlogHandler = () => {
    fetch('https://mern-blog-tsm.onrender.com/api/v1/' + props.id, {
      method: 'DELETE',
    }).then((response) => props.setHome());
  };

  return (
    <Card className='card blog'>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      {/* <button name='update'>Update</button> */}
      <button name='delete' onClick={deleteBlogHandler}>
        Delete
      </button>
    </Card>
  );
};

export default Blog;
