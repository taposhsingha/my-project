import React from "react";
import Endbar from "../../components/endbar/Endbar";

export default function Login() {
  return (
    <div>
      <div class="w-4/5 h-[800px]  mx-auto">
        <form action="#">
          <div class="login-form">
            <div class="title">Login</div>
            <div class="input-boxes">
              <div class="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div class="input-box">
                <i className="fas fa-envelope"></i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div class="text">
                <a href="#">Forgot password?</a>
              </div>
              <div class="button">
                <i className="fas fa-envelope"></i>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Endbar />
    </div>
  );
}
