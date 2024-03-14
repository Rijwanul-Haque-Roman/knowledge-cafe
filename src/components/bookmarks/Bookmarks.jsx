import Bookmarked from "../bookmarked/Bookmarked";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmark, time }) => {
  return (
    <div className="w-1/3 flex flex-col gap-6">
      <div className="text-[#6047EC] text-2xl font-bold flex justify-center items-center py-6 px-12 border-2 border-[#6047EC] rounded-lg bg-[#6047EC1A]">
        <p>Spent time on read: {time} </p>
      </div>
      <div className="rounded-lg bg-[#1111110D] p-8">
        <p className="text-2xl font-bold my-4">
          Bookmarked Blogs : {bookmark.length}
        </p>
        <div>
          <Bookmarked bookmarks={bookmark}></Bookmarked>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
Bookmarks.propTypes = {
  bookmark: PropTypes.array,
  time: PropTypes.number,
};
