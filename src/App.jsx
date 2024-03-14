import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs.jsx";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readtime, setReadTime] = useState(0);

  const handleBookmark = (blog) => {
    console.log(blog);
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  const handleTime = (time, id) => {
    console.log("mark as read", time);
    setReadTime(readtime + time);
    // remove bookmark after mark as read
    const remainingBookmark = bookmark.filter((bookmark) => bookmark.id !== id);
    setBookmark(remainingBookmark);
  };

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex justify-between gap-7 mt-8">
        <Blogs handleBookmark={handleBookmark} handleTime={handleTime}></Blogs>
        <Bookmarks bookmark={bookmark} time={readtime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
