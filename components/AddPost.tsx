import React from "react";

function AddPost() {
  return (
    <div className="bg-gray-200">
      <form className="flex flex-col sm:w-[500px] space-y-2 py-4 mx-2 sm:mx-auto">
        <input
          className="rounded-sm shadow-sm pl-1 outline-none ring-red-300 focus:ring-2"
          type="text"
          name="title"
          id="title"
          placeholder="Titulo"
        />
        <textarea
          className="rounded-sm shadow-sm pl-1 outline-none ring-red-300 focus:ring-2"
          name="text"
          id="text"
          placeholder="Texto"
        ></textarea>
        <button className="bg-red-500 text-white font-semibold px-2 py-2 w-min mx-auto rounded-sm shadow-sm outline-none ring-red-300 focus:outline-none focus:ring-2">
          Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
