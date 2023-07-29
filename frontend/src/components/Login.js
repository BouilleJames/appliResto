import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary">
      <div className="p-3 bg-white w-25">
        <form action="" method="get">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
