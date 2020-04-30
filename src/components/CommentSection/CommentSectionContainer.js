// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

import dummyData from "../../dummy-data";

const CommentSection = () => {
  const [data] = useState(dummyData);
  const [mydata] = data.map((item) => item.comments);
  const [strings, changeString] = useState("");

  const stringChange = () => {
    changeString(!strings);
    if (strings === true) {
      changeString(mydata.push(strings));
      console.log(mydata.text);
    }
    return strings;
  };
  console.log(mydata);
  // console.log(props);
  return (
    <div>
      {/* map through the comments data and 
      return the Comment component */}
      {mydata.map((item) => {
        return <Comment username={item.username} text={item.text} />;
      })}
      <CommentInput changeHandle={stringChange} strings={strings} />
    </div>
  );
};

export default CommentSection;
