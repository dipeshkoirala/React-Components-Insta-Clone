// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

import dummyData from "../../dummy-data";

const CommentSection = () => {
  // Add state for the comments
  const dummy = useState(dummyData);
  // console.log(props);
  return (
    <div>
      {
        /* map through the comments data and return the Comment component */
        dummy.map((item) => {
          return <Comment Comment={item.comments} />;
        })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
