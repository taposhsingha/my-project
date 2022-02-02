import React from "react";
import { Link } from "react-router-dom";

export default function Blog({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div class="px-6 py-6 flex flex-wrap">
      <div class="w-[385px] mt-[20px] mr-[25px] mb-[40px] ml-[25px] ">
        <div class="w-full h-[280px]  object-cover">
          <div>
            {post.photo && (
              <img class="rounded-[7px]" src={PF + post.photo} alt="" />
            )}
          </div>

          <div class="flex flex-col items-center">
            <div>
              {post.categories.map((c) => (
                <div class="mt-[8px] mr-[8px]">{c.name}</div>
              ))}
            </div>
            <Link to={`/post/${post._id}`}>
              <div class="mt-[8px]">{post.title}</div>
            </Link>

            <div class="mt-[8px]">
              {new Date(post.createdAt).toDateString()}
            </div>
            <div class="mt-[10px] ">{post.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
