const Blog = require('../models/blog');

const getAllBlogs = (req, res) => {
  Blog.find({})
    .then((blogs) => res.status(200).json(blogs))
    .catch((err) => console.log(err));
};

const getBlog = (req, res) => {
  const requestedId = req.params.id;
  Blog.findById(requestedId)
    .then((blog) => res.status(200).json(blog))
    .catch((err) => console.log(err));
};

const createBlog = (req, res) => {
  title = req.body.title;
  content = req.body.content;
  console.log(req.body);
  const blog = new Blog({ title: title, content: content });
  blog
    .save()
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
};

const updateBlog = (req, res) => {};

const deleteAllBlogs = (req, res) => {};

const deleteBlog = (req, res) => {};

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteAllBlogs,
  deleteBlog,
};
