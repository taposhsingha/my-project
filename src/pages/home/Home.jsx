import React, { useEffect, useState } from "react";
import Blogs from "../../components/blogs/Blogs";
import homeimg from "../../images/career_pic.jpg";
import Jobposts from "../../components/jobposts/Jobposts";
import Endbar from "../../components/endbar/Endbar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Categories from "../../components/categories/Categories";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div>
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
          <Link to="/register">
            <button class="absolute top-96 left-32 py-3 px-3 bg-blue-400 text-white rounded">
              Register
            </button>
          </Link>

          <button class="absolute top-96 left-96 py-3 px-3 bg-blue-400 text-white rounded">
            Why Join
          </button>
        </div>
        <p class="text-5xl font-ubun text-center">Blogs list</p>
        <Categories />
        <div>
          <Blogs posts={posts} />
        </div>
        <p class="text-5xl font-ubun text-center mt-[35px]">Internship list</p>
        <div class="mt-[20px]">
          <Jobposts />
        </div>
      </div>
      <Endbar />
    </div>
  );
}
