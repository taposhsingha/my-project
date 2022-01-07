import React from "react";
import Topbar from "../../components/topbar/TopBar";
import homeimg from "../../images/career_pic.jpg";
import Endbar from "../../components/endbar/Endbar";

export default function Article() {
  return (
    <div>
      <div class="w-4/5 mx-auto mt-[0px]">
        <div class="mt-[10px] text-5xl font-ubun text-center">
          This is the title of the blog
        </div>
        <img
          class="mt-[10px] w-full h-[600px] rounded-[12px] object-cover"
          src={homeimg}
          alt=""
        />
        <div class="mt-[10px]">
          <div class="relative">
            <a href="#" class="absolute left-0 text-xl">
              Author : Taposh Singha
            </a>
            <a href="#" class="absolute left-0 top-[35px]">
              Date of the blog: 12 september,2021
            </a>
            <button class="absolute right-[20px] py-3 px-3 bg-blue-400 text-white rounded">
              Delete Blog
            </button>
            <button class="absolute right-[150px] py-3 px-3 bg-green-400 text-white rounded">
              Update Blog
            </button>
          </div>
          <div class="relative">
            <div class="absolute mt-[60px] leading-[2] text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              non eligendi at voluptate molestiae! Eius, consectetur a, vitae
              impedit iusto fugit quo sequi fuga esse, reiciendis aut maxime
              tempore saepe! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Debitis non eligendi at voluptate molestiae! Eius,
              consectetur a, vitae impedit iusto fugit quo sequi fuga esse,
              reiciendis aut maxime tempore saepe! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Debitis non eligendi at voluptate
              molestiae! Eius, consectetur a, vitae impedit iusto fugit quo
              sequi fuga esse, reiciendis aut maxime tempore saepe! Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Debitis non eligendi
              at voluptate molestiae! Eius, consectetur a, vitae impedit iusto
              fugit quo sequi fuga esse, reiciendis aut maxime tempore saepe!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              non eligendi at voluptate molestiae! Eius, consectetur a, vitae
              impedit iusto fugit quo sequi fuga esse, reiciendis aut maxime
              tempore saepe! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Debitis non eligendi at voluptate molestiae! Eius,
              consectetur a, vitae impedit iusto fugit quo sequi fuga esse,
              reiciendis aut maxime tempore saepe! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Debitis non eligendi at voluptate
              molestiae! Eius, consectetur a, vitae impedit iusto fugit quo
              sequi fuga esse, reiciendis aut maxime tempore saepe! Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Debitis non eligendi
              at voluptate molestiae! Eius, consectetur a, vitae impedit iusto
              fugit quo sequi fuga esse, reiciendis aut maxime tempore saepe!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              non eligendi at voluptate molestiae! Eius, consectetur a, vitae
              impedit iusto fugit quo sequi fuga esse, reiciendis aut maxime
              tempore saepe! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Debitis non eligendi at voluptate molestiae! Eius,
              consectetur a, vitae impedit iusto fugit quo sequi fuga esse,
              reiciendis aut maxime tempore saepe! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Debitis non eligendi at voluptate
              molestiae! Eius, consectetur a, vitae impedit iusto fugit quo
              sequi fuga esse, reiciendis aut maxime tempore saepe! Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Debitis non eligendi
              at voluptate molestiae! Eius, consectetur a, vitae impedit iusto
              fugit quo sequi fuga esse, reiciendis aut maxime tempore saepe!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              non eligendi at voluptate molestiae! Eius, consectetur a, vitae
              impedit iusto fugit quo sequi fuga esse, reiciendis aut maxime
              tempore saepe! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Debitis non eligendi at voluptate molestiae! Eius,
              consectetur a, vitae impedit iusto fugit quo sequi fuga esse,
              reiciendis aut maxime tempore saepe! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Debitis non eligendi at voluptate
              molestiae! Eius, consectetur a, vitae impedit iusto fugit quo
              sequi fuga esse, reiciendis aut maxime tempore saepe!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
