import React from "react";
import Endbar from "../../components/endbar/Endbar";

export default function Login() {
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-slate-800">
        <div class="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 class="font-poppin font-bold text-3xl mb-10 text-purple-800">
            Login your Account
          </h2>
          <form class="space-y-4">
            <div>
              <label class="block mb-2 font-bold text-gray-500">Name</label>
              <input
                type="text"
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label class="block mb-2 font-bold text-gray-500">Password</label>
              <input
                type="password"
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </div>
            <button class="block w-full bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 hover:text-purple-800 transition duration-300">
              Login
            </button>
            <div class="flex items-center">
              <label class="mb-2 font-bold text-gray-500">
                Already have an account
              </label>
              <button class="ml-2 w-16 bg-blue-400 hover:bg-blue-300 p-[8px] rounded text-blue-900 hover:text-blue-800 transition duration-300">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
