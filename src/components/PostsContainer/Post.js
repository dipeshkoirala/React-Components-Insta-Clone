// You will add code in this file
import React, { useState } from "react";

import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

//import dummyData from "../../dummy-data";

import "./Posts.css";

const Post = (props) => {
  console.log(props);
  //const [like, setLike] = useState(0);
  //
  const [likes, setLike] = useState(props.like); //liked +1 (Boolean)=0 or 1
  const [dkLikes, setDkLike] = useState(false);
  // console.log(props.like);
  const button1 = () => {
    //change your state
    setDkLike(!dkLikes);
    if (dkLikes === true) {
      setLike(likes - 1);
    } else {
      setLike(likes + 1);
    }
  };

  //
  return (
    <div className="post-border">
      <PostHeader username={props.username} thumbnailUrl={props.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={props.postI} />
      </div>
      {/* <span className="my-class"> */}
      {<LikeSection clickHandle={button1} likes={likes} />}
      {console.log("-->" + likes)}

      {/* </span> */}
      <CommentSection
        postId={props.thumbnailUrl}
        comments={props.username}
        text={props.text}
      />
    </div>
  );
};
//
export default Post;
