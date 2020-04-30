// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

//import Post from "./Post";
const LikeSection = (props) => {
  // const [like, setLike] = useState(false); //liked +1 (Boolean)=0 or 1
  // const [dkLikes, setDkLike] = useState(likes);
  // console.log(props.likes);
  // const button = () => {
  //   //change your state
  //   setLike(!like);
  //   if (like === true) {
  //     setDkLike(dkLikes - 1);
  //   } else {
  //     setDkLike(dkLikes + 1);
  //   }
  // };
  console.log(props);
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={props.clickHandle} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{props.likes} Likes</p>
    </div>
  );
};

export default LikeSection;
