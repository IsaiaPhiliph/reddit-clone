import React from "react";
import { PostType } from "../interfaces";
import { abbreviateNumber } from "js-abbreviation-number";

type Props = {
  post?: PostType;
};

function Post({ post }: Props) {
  return (
    <div className="flex flex-col sm:flex-row  w-full sm:w-[500px] mx-auto border-[1px] rounded-md bg-white">
      <div className="flex sm:flex-col px-1 border-b-[1px] sm:border-b-0 sm:border-r-[1px] py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer hover:text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span>{post?.karma && abbreviateNumber(post.karma)}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer hover:text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-2 border-b-[1px] pl-4 py-1">
          <span>r/tifu</span>
          <span className="whitespace-nowrap">by {post?.author}</span>
          <span className="whitespace-nowrap">6min ago</span>
        </div>
        <div className="flex flex-col rounded-md p-4 gap-y-2">
          <div className="space-x-1">
            <h1 className="text-xl font-semibold inline cursor-pointer">
              {post?.title}
            </h1>
            {post?.tags.map((tag) => (
              <span className=" text-xs bg-red-600 text-white font-semibold rounded-[20px] p-1 cursor-pointer">
                {tag.name}
              </span>
            ))}
          </div>
          <p>{post?.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
