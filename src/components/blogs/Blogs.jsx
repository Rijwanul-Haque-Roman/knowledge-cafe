import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handleTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="rounded-lg w-2/3 ">
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog?.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleTime={handleTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleTime: PropTypes.func,
};
