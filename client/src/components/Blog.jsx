import React from 'react';

const Blog = (props) => {
  const blog = { title: 'dg', content: 'asdg' };
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default Blog;
