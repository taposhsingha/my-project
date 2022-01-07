import React from "react";
import Topbar from "../../components/topbar/TopBar";
import homeimg from "../../images/career_pic.jpg";
import Endbar from "../../components/endbar/Endbar";

export default function Singlejob() {
  return (
    <div>
      <div class="w-4/5 h-[1800px] mx-auto">
        <img
          class="mt-[10px] w-[1100px] mx-auto rounded-[10px]"
          src={homeimg}
          alt=""
        />
        <div class="ml-[60px] py-[6px] px-[6px]">
          <p class="text-3xl  mt-[15px] font-bold">
            Engineer/ Sr. Engineer - Service (Laptop & IT Products)
          </p>
          <p class="text-xl mt-[15px]">Walton Digi-Tech Industries Ltd.</p>
          <p class="mt-[15px] ml-[1000px]">Vacancy</p>
          <p class=" ml-[25px] ml-[1000px]">07</p>
          <p class="font-bold text-xl">Job Responsibilities</p>
          <ul class="list-disc ml-[25px] text-lg">
            <li>
              To troubleshoot and repair Laptop, Desktop, Monitor, All in One
              PC, Router and others IT product etc.
            </li>
            <li>To provide effective service solution for customers.</li>
            <li>
              To communicate with clients and customers to ensure that services
              are delivered effectively.
            </li>
            <li>
              To follow up on service requests and provide customer feedback.
            </li>
            <li>
              To visit plaza and distributors with Sales & Marketing team to
              build up relation.
            </li>
            <li>To carry out any other tasks given by HOD.</li>
          </ul>
          <p class="text-xl font-bold mt-[10px]">Employment Status</p>
          <p class="text-lg ml-[10px]">Full-time</p>
          <p class="font-bold text-lg mt-[10px]">Educational Requirements</p>
          <ul class="list-disc ml-[25px] text-lg">
            <li>B.Sc in Engineering from any reputed University.</li>
            <li>Skills Required: Technical Service</li>
          </ul>
          <p class="font-bold text-lg mt-[10px]">Experience Requirements</p>
          <ul class="list-disc ml-[25px] text-lg">
            <li>At least 2 year(s)</li>
            <li>
              The applicants should have experience in the following area(s):
              Computer Sales(Hardware Software), Laptop Servicing
            </li>
          </ul>
          <p class="font-bold text-lg mt-[10px]">Additional Requirements</p>
          <ul class="list-disc ml-[25px] text-lg">
            <li>Age at least 25 years</li>
            <li>Must have experience in Laptop repair.</li>
            <li>Smart, active and capability on customer management.</li>
            <li>Exceptional technical expertise.</li>
            <li>Interested to learn new things.</li>
            <li>Hands on service experience on electronics item.</li>
            <li>Positive thinking, self-motivated and well-mannered.</li>
            <li>Good communication skill.</li>
          </ul>
          <p class="font-bold text-lg mt-[10px]">Job Location</p>
          <p class="text-lg ml-[25px]">Anywhere in Bangladesh</p>
          <p class="font-bold text-lg mt-[10px]">Salary</p>
          <p class="text-lg ml-[25px]">Negotiable</p>
          <p class="font-bold text-lg mt-[10px]">Job Source</p>
          <p class="text-lg ml-[25px]">Bdjobs.com Online Job Posting.</p>
          <div class="items-center">
            <button class="ml-[470px] mt-[100px] py-3 px-3 bg-blue-400 text-white rounded">
              Apply Now
            </button>
            <p class=" text-lg mt-[10px]">Application Deadline : 14 Jan 2022</p>
          </div>
        </div>
      </div>
      <Endbar />
    </div>
  );
}
