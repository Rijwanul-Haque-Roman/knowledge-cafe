import PropTypes from "prop-types";
import bookmark from "../../assets/bookmark.svg";

const Blog = ({ blog, handleBookmark, handleTime }) => {
  const { hashtags } = blog;

  return (
    <div>
      <img className="rounded-lg" src={blog.cover} alt="blog-cover" />
      <div className="flex justify-between items-center my-8">
        <div className="flex justify-between items-center gap-6">
          <img
            className="w-[60px] h-[60px]"
            src={blog.author}
            alt="author-image"
          />
          <div>
            <h3 className="text-2xl font-medium">{blog.name}</h3>
            <p className="text-[#11111199]">
              Published in {blog["publish_date"]}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-[#11111199]">{blog["reading_time"]} min read</p>
          <button onClick={() => handleBookmark(blog)}>
            <img src={bookmark} alt="bookmark" />
          </button>
        </div>
      </div>
      <h2 className="text-black text-[40px] font-bold my-[30px]">
        {blog.title}
      </h2>
      <p className="text-[#11111199] text-xl">
        {hashtags.map((hash, idx) => (
          <span className="mr-8" key={idx}>
            <a href="#"> {hash}</a>
          </span>
        ))}
      </p>
      <div className="py-8 mb-8 border-b-2">
        <button
          onClick={() => handleTime(blog["reading_time"], blog.id)}
          className="underline text-[#6047EC] text-xl my-8"
        >
          mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleTime: PropTypes.func,
};
