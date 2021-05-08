import React from "react";
import { PostType } from "../interfaces";

type Props = {
  post?: PostType;
};

function Post({ post }: Props) {
  return (
    <div className="flex flex-col bg-gray-300 mx-auto w-full sm:w-[500px] rounded-md p-4 gap-y-2">
      <h1 className="text-xl">{post?.title}</h1>
      <p>{post?.content}</p>
      <p>Autor: {post?.author}</p>
      <p>Karma: {post?.karma}</p>
      <p>Tags: {post?.tags.map((tag) => `${tag.name}, `)}</p>
    </div>
  );
}

export default Post;
