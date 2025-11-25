import React from "react";

export default function ImageCard({ image }) {
  const tags = image.tags.split(",").slice(0, 3); // 문자열을 , 기준으로 나눠서 배열로 만듬
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.largeImageURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>downloads: </strong> {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
