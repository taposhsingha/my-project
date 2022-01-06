import React from "react";
import Endbar from "../../components/endbar/Endbar";
import Topbar from "../../components/topbar/TopBar";
import homeimg from "../../images/career_pic.jpg";

export default function EditArticle() {
  return (
    <div>
      <Topbar />
      <div class="w-4/5 flex items-center justify-center mx-auto">
        <div class="bg-white rounded  w-[1100px] ">
          <img
            class=" w-[1100px] mx-auto rounded-[10px]"
            src={homeimg}
            alt=""
          />
          <button class="block mt-2 ml-2 w-32 bg-blue-400 hover:bg-blue-300 p-[8px] rounded text-blue-900 hover:text-blue-800 transition duration-300">
            +Upload Image
          </button>
          <form class="space-y-4 ml-4 mt-4">
            <div>
              <label class="block mb-2 font-bold text-gray-500">
                Enter Title:
              </label>
              <input
                type="text"
                class="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 font-bold text-gray-500">
                Write your blog:
              </label>
              <textarea
                type="text"
                class="w-4/5 border border-purple-200 h-[200px] rounded outline-none focus:border-blue-500"
              />
            </div>
            <button class="block mt-2 ml-2 w-24 bg-blue-400 hover:bg-blue-300 p-[8px] rounded text-blue-900 hover:text-blue-800 transition duration-300">
              Publish
            </button>
          </form>
        </div>
      </div>
      <Endbar />
    </div>
  );
}
