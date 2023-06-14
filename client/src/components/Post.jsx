import React, { useState } from 'react';

const Post = (props) => {
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
  });

  const newBlogChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const postBlog = () => {
    setNewBlog((prev) => ({ ...prev, id: Math.random().toString }));
    props.addBlog(newBlog);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    postBlog();
  };

  return (
    <div>
      <form className='form-control' onSubmit={submitHandler}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          placeholder='Enter Title Here'
          value={newBlog.title}
          onChange={newBlogChangeHandler}
        />
        <label htmlFor='content'>Content</label>
        <textarea
          name='content'
          id=''
          cols='30'
          rows='10'
          placeholder='Enter Content Here'
          value={newBlog.content}
          onChange={newBlogChangeHandler}
        ></textarea>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};

export default Post;
