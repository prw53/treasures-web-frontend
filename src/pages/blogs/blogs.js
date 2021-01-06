import React from 'react';
import BlogList from './BlogList';
// When Router and Route are removed the link fails ---------------------------------- ???
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './blogs.css';

function Blogs() {
  return (
    <div className="blogContainer">
      <div >
        <Link to="/adminBlogs">Administration</Link>
      </div>
      <BlogList />
    </div>
  )
}

export default Blogs;
