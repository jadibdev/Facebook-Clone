import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQGqQnBCln51zg/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=gP-q8p1HnGkNTPBWAU6JFm0JqwlzH_8kmDJP8-jofeM"
        message="it works!!!"
        timestamp="This is a timestamp"
        username="m_jadib"
        image="https://s3.amazonaws.com/startupcollective-com/wp-content/uploads/Code1-675x320.jpg"
      />

      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQGqQnBCln51zg/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=gP-q8p1HnGkNTPBWAU6JFm0JqwlzH_8kmDJP8-jofeM"
        message="it works!!!"
        timestamp="This is a timestamp"
        username="m_jadib"
      />
      <Post />
    </div>
  );
};

export default Feed;
