import React from "react";
import homeimg from "../../images/career_pic.jpg";

export default function Blog() {
  return (
    <div class="px-6 py-6 flex flex-wrap">
      <div class="w-[385px] mt-[20px] mr-[25px] mb-[40px] ml-[25px] ">
        <div class="w-full h-[280px]  object-cover">
          <img class="rounded-[7px]" src={homeimg} alt="" />
          <div class="flex flex-col items-center">
            <div class="mt-[8px] mr-[8px]">Tech</div>
            <div class="mt-[8px]">This is the title for this blog</div>
            <div class="mt-[8px]">12 september 2021</div>
            <div class="mt-[10px] ">
              Description for the blog. <br />
              Description for the blog. <br />
              Description for the blog. <br />
              Description for the blog. <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
