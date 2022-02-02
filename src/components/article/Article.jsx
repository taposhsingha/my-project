import React, { useContext, useEffect, useState } from "react";
import homeimg from "../../images/career_pic.jpg";
import Endbar from "../../components/endbar/Endbar";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Article() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div>
      <div>
        <div class="w-4/5 mx-auto mt-[0px]">
          {post.photo && (
            <img
              class="mt-[10px] w-full h-[600px] rounded-[12px] object-cover"
              src={PF + post.photo}
              alt=""
            />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              class="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
            />
          ) : (
            <>
              <div class="mt-[10px] text-5xl font-ubun text-center">
                {title}
              </div>
              {post.username === user?.username && (
                <>
                  <button
                    class="mr-[20px] py-3 px-3 bg-blue-400 text-white rounded"
                    onClick={handleDelete}
                  >
                    Delete Blog
                  </button>
                  <button
                    class="ml-[20px] py-3 px-3 bg-green-400 text-white rounded"
                    onClick={() => setUpdateMode(true)}
                  >
                    Update Blog
                  </button>
                </>
              )}
            </>
          )}

          <div class="mt-[10px]">
            <div class="relative">
              <a href="#" class="left-0 text-xl">
                Author :{" "}
                <Link to={`/?user=${post.username}`}>{post.username}</Link>
              </a>
              <a href="#" class="ml-[20px] top-[35px]">
                written at {new Date(post.createdAt).toDateString()}
              </a>
            </div>
            <div class="relative">
              {updateMode ? (
                <>
                  <textarea
                    value={desc}
                    class="w-4/5 border border-purple-200 h-[200px] rounded outline-none focus:border-blue-500"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <button
                    class="ml-[20px] py-3 px-3 bg-green-400 text-white rounded"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </>
              ) : (
                <div class="absolute mt-[60px] leading-[2] text-lg">{desc}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
