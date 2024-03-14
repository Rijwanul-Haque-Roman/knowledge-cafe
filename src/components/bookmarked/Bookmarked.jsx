import PropTypes from "prop-types";

const Bookmarked = ({ bookmarks }) => {
  return (
    <div>
      {bookmarks.map((bookmark, idx) => (
        <div
          key={idx}
          className="bg-white  mx-auto p-5 rounded-lg text-black text-lg font-semibold leading-7 my-4"
        >
          {bookmark.title}
        </div>
      ))}
    </div>
  );
};

export default Bookmarked;

Bookmarked.propTypes = {
  bookmarks: PropTypes.array,
};
