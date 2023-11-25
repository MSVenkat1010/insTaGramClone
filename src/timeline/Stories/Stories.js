import React from "react";
import "./Stories.css";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import StoryView from "./StoryView/StoryView";
function Stories({ storyView, proPic, userName = "checkfkfkf", postImage }) {
  console.log("InStories=>");
  const navigate = useNavigate();
  const [seen, setSeen] = React.useState(false);

  const handleStoryClick = () => {
    // Handle click to mark the story as seen
    navigate("/stories");
    setSeen(true);
  };
  return storyView ? (
    <div >
      <div style={{display:"flex", flexDirection:"row"}}>
      <Avatar className="user_avatar" src={proPic} onClick={handleStoryClick}>
        Test
      </Avatar>
      <div className="user_name">
        {userName.length > 5 ? userName.slice(0, 4) + "..." : userName}
      </div>
      </div>
     <img src={postImage} alt="slide_image"/>

    </div>
  ) : (
    <div className="Stories">
      <Avatar className="user_avatar" src={proPic} onClick={handleStoryClick}>
        Test
      </Avatar>
      <div className="user_name">
        {userName.length > 5 ? userName.slice(0, 4) + "..." : userName}
      </div>
    </div>
  );
}

export default Stories;
