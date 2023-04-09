/* eslint-disable */
import React, { useState, useContext, useRef, useEffect, FC } from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import AxiosConfig from "../AxiosConfig";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, NavLink, RouteProps } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";

import GoogleSocialAuth from "../components/social/GoogleSocialAuth";
import FacebookSocialAuth from "../components/social/FacebookSocialAuth";

const { useToasts } = require("react-toast-notifications");

interface IJwtPayload extends JwtPayload {
  user: any;
  err: any;
}
// let navigate = useNavigate()
const LoginPage: FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isNavigate, setIsNavigate] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const authContext = useContext(AuthContext);
  console.log("authcontext", authContext, AuthContext);
  const { addToast } = useToasts();
  const _isMounted = useRef(true);

  useEffect(() => {
    return () => {
      // ComponentWillUnmount in Class Component
      _isMounted.current = false;
    };
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    setSubmitted(true);

    if (!phone && !password) {
      setSubmitted(false);
      alert("All fields are required");
      return true;
    }
    let phoneInNumber = +phone;
    const postData = {
      phone: phoneInNumber,
      password: password,
    };

    const loginUser = async () => {
      try {
        const res = await AxiosConfig.post("auth/login", postData);
        console.log("res on login", res);
        let decoded = jwtDecode<IJwtPayload>(res.data.token);
        console.log("decoded", decoded);
        authContext.authDispatch({
          type: authContext.ActionTypes.LOGIN,
          payload: {
            user: decoded.user || {},
            token: res.data.token,
            refreshToken: res.data.refresh,
          },
        });
        addToast("Logged in successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        setSubmitted(false);
        if (_isMounted.current) {
          // navigate('/');
          <Navigate to="/" />;
        } else {
          _isMounted.current = false;
        }
      } catch (err: any) {
        if (err.response && err.response.status === 401) {
          addToast("Login failed", { appearance: "error", autoDismiss: true });
        } else if (err.response && err.response.status === 404) {
          addToast("Given mobile number is not register!", {
            appearance: "error",
            autoDismiss: true,
          });
        } else {
          addToast("Login failed", { appearance: "error", autoDismiss: true });
        }

        console.log("err", err);
        setSubmitted(false);
      }
    };

    loginUser().then();
  };

  if (isNavigate || authContext.state.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <React.Fragment>
      <Header />
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Login</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="content" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-xs-12">
              <div className="page-login-form box">
                <form className="login-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user" />
                      <input
                        type="number"
                        id="sender-email"
                        className="form-control"
                        name="number"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => {
                          e.target.value.length <= 10
                            ? setPhone(e.target.value)
                            : "";
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock" />
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Keep Me Signed In
                    </label>
                  </div>
                  <button
                    type="submit"
                    hidden={submitted}
                    className="btn btn-primary log-btn"
                  >
                    Login
                  </button>
                  <button
                    type="submit"
                    hidden={!submitted}
                    className="btn btn-primary log-btn"
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                </form>
                <ul className="form-links">
                  <li className="text-center">
                    <button
                      type="button"
                      style={{ border: "1px solid black" }}
                      className="btn btn-outline-primary"
                    >
                      <NavLink to="/register">Don't have an account?</NavLink>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-2">
            <div className="col-md-4">{/* <FacebookSocialAuth /> */}</div>
            <div className="col-md-4">{/* <GoogleSocialAuth /> */}</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LoginPage;
