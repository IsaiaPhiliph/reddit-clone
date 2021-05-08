import React, { useEffect, useState } from "react";
import { samplePostData } from "../utils/sample-data";
import { PostType } from "../interfaces";
import Post from "./Post";

function PostsFeed() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    setPosts(samplePostData);
  });

  return (
    <div className="flex flex-col gap-y-2 items-start justify-start p-2 sm:mx-0 bg-gray-200">
      {posts &&
        posts.map((post) => {
          return <Post post={post} />;
        })}
    </div>
  );
}

export default PostsFeed;
