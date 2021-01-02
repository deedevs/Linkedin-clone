import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=qlR0Vks"
        alt=""
      />

      <form>
          <input type="text" placeholder='Full name (required if registering)'/>
      </form>
    </div>
  );
}

export default Login;
