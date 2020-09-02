import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* MessageSender */}
    </div>
  );
};

export default Feed;
