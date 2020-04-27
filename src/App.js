/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
//import Post1 from "./components/PostsContainer/PostHeader";
//import Comment from "./components/CommentSection/CommentSectionContainer";

//import dummyData from "./dummy-data";
import Post from "./components/PostsContainer/Post";
import SearchBar from "./components/SearchBar/SearchBarContainer";

const App = () => {
  return (
    <div className="App">
      {<Post />}
      {<SearchBar />}
      {/* {<Comment Comment />} */}
      {
        /* /* /* Add imported components here to render them */
        // } */
      }
    </div>
  );
};

export default App;
