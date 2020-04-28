//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import "./PostHeader";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {
        /* map through data here to 
      return a Post 
      and pass data as props to Post */
        data.map((item) => {
          return (
            <Post
              username={item.username}
              thumbnailUrl={item.thumbnailUrl}
              source={item.imageUrl}
              like={item.likes}
              postI={item.imageUrl}
              comment={item.comments}
            />
          );
        })
      }
    </div>
  );
};

export default PostsPage;
