import React from 'react';

const Post = () => {
  return (
    <div>
      <form className='form-control'>
        <label htmlFor="title">Title</label>
        <input type="text" name='title' placeholder='Enter Title Here'/>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="" cols="30" rows="10" placeholder='Enter Content Here'></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
