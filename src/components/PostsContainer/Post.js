// You will add code in this file
import React, { useState } from "react";

import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

//import dummyData from "../../dummy-data";

import "./Posts.css";

const Post = (props) => {
  //console.log(props);

  return (
    <div className="post-border">
      <PostHeader username={props.username} thumbnailUrl={props.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.thumbnailUrl}
        />
      </div>
      <span className="my-class">
        <LikeSection like={props.likes} />
      </span>
      <CommentSection postId={props.imageUrl} comments={props.comments} />
    </div>
  );
};

export default Post;
