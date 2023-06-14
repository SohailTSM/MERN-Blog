import React, { useEffect, useState } from 'react';

const Blog = (props) => {
  const [blog, setBlog] = useState({ title: '', content: '' });
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/' + props.id, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => setBlog(json));
  }, []);

  const deleteBlogHandler = () => {
    
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      {/* <button name='update'>Update</button> */}
      <button name='delete' onClick={deleteBlogHandler}>Delete</button>
    </div>
  );
};

export default Blog;
