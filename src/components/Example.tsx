import React from "react";
import Post from "./Post";

const Example = () => {
  return (
    <div className="ml-20 mt-52 -rotate-3">
      <Post
        id="pelda"
        title="This blog is cool"
        content="This blog app is soooo coool I love it!"
      />
      <Post
        id="pelda1"
        title="My first post"
        content="This is my first ever post on this site : )"
      />
    </div>
  );
};

export default Example;
