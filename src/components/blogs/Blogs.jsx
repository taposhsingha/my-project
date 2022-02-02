import Blog from "../../components/blog/Blog";
import React from "react";

export default function Blogs({ posts }) {
  return (
    <div class="flex flex-wrap">
      {posts.map((p) => (
        <Blog post={p} />
      ))}
    </div>
  );
}
