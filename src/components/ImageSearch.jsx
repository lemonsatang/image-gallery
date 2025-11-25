import React, { useState } from "react";

export default function ImageSearch({ setTerm }) {
  const [text, setText] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    setTerm(text);
    console.log("검색단어", text);
  }
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="max-w-md mx-auto">
        <label
          htmlFor="search"
          className="block mb-2.5 text-sm font-medium text-heading sr-only"
        >
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="search"
            id="search"
            className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            placeholder="이미지 검색..."
            required
          />
          <button
            type="submit"
            className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
