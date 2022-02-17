import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginImg from "../images/login.png";
import { userLogin } from "../Redux/actions";
function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container mx-auto mt-3 mb-1">
        <div className="row">
          <div className="col-sm-12">
            <div className="card shadow" style={{ border: "none" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="p-5 mt-5">
                      <div className="mb-2">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="name@example.com"
                          name="email"
                          value={input.email}
                          onChange={handleInput}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="***********"
                          value={input.password}
                          name="password"
                          onChange={handleInput}
                        />
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          if (
                            input.email === "dheemanpati53@gmail.com" &&
                            input.password === "sayan123"
                          ) {
                            dispatch(userLogin());
                            navigate("../", { replace: false });
                          } else {
                            alert("invalid credentials 🎌");
                          }
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <img
                      src={LoginImg}
                      className="img-fluid"
                      style={{ width: "90%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
