import React from "react";
import Blog from "../../components/blog/Blog";
import TopBar from "../../components/topbar/TopBar";
import homeimg from "../../images/career_pic.jpg";
import Jobpost from "../../components/jobpost/Jobpost";
import Endbar from "../../components/endbar/Endbar";

export default function Home() {
  return (
    <div>
      <TopBar class="sticky" />
      <div class="relative">
        <img src={homeimg} />
        <div>
          <h1 class="absolute top-32 left-36 text-white text-5xl font-ubun">
            This is a website about internship and career. <br />
            This is a website about internship and career.
            <br />
            This is a website about internship and career.
            <br />
            This is a website about internship and career.
          </h1>
          <button class="absolute top-96 left-32 py-3 px-3 bg-blue-400 text-white rounded">
            Register
          </button>
          <button class="absolute top-96 left-96 py-3 px-3 bg-blue-400 text-white rounded">
            Why Join
          </button>
        </div>
        <p class="text-5xl font-ubun text-center">Blogs list</p>
        <div class="flex flex-wrap">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        <p class="text-5xl font-ubun text-center mt-[35px]">Internship list</p>
        <div class="mt-[20px]">
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
        </div>
      </div>
      <Endbar />
    </div>
  );
}
