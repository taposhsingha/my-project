import React from "react";
import homeimg from "../../images/career_pic.jpg";

export default function Jobpost() {
  return (
    <div>
      <div class="mt-[15px] w-[900px]  container ml-[20px] bg-gray-200 rounded-[12px] p-[8px]">
        <div class="flex">
          <img
            class="w-[350px] h-[200px] object-cover rounded-[12px]"
            src={homeimg}
            alt=""
          />
          <div class="ml-[20px]">
            <p class=" text-3xl">Full Stack senior Web developer</p>
            <p>New York Software development firm</p>
            <p class=" text-xl">Location: United States</p>
            <p>
              Educational requirements: At least BSC in CSE from any reputed
              university
            </p>
            <p>Experience: At least 2 to 5 years.</p>
            <div class="flex">
              <button class="mt-[10px] ml-[10px] py-3 px-3 bg-blue-400 text-white rounded">
                View full offer...
              </button>
              <button class="mt-[10px] ml-[40px] py-3 px-3 bg-blue-400 text-white rounded">
                Apply Now
              </button>
              <p class="mt-[25px] ml-[75px]">Deadline:27 Jan 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
