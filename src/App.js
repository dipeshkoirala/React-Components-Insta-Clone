/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
//import PostPage from "./components/PostsContainer/PostsPage";
import Comment from "./components/CommentSection/Comment";

//import dummyData from "./dummy-data";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";

const App = () => {
  return (
    <div className="App">
      {<PostsPage />}
      {<SearchBar />}
      {
        /* /* /* Add imported components here to render them */
        // } */
      }
      <Comment comment />
    </div>
  );
};

export default App;
