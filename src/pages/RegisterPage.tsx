/* eslint-disable */
import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import AxiosConfig from "../AxiosConfig";
import { AuthContext } from "../contexts/AuthContext";
import { NavLink, Navigate } from "react-router-dom";
import swal from "sweetalert";

const { useToasts } = require("react-toast-notifications");

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [isNavigate, setIsNavigate] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const authContext = useContext(AuthContext);
  const { addToast } = useToasts();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const vertical = "top";
  const horizontal = "center";

  const handlePhone = (value: string) => {
    setPhoneError("");
    if (value.length <= 10) {
      setPhone(value);
    } else {
    }
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    if (!phone.match(/^(?:\+91|0)?[6789]\d{9}$/)) {
      setPhoneError("Please enter valid phone number");
      return;
    }
    if (
      !phone ||
      !password ||
      !firstName ||
      !lastName ||
      !firstName ||
      !gender ||
      !role
    ) {
      addToast("All fields are required", { appearance: "error" });
      setSubmitted(false);
      return true;
    }

    if (!password.match(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/)) {
      setPasswordError(
        "Password should contain 1 character 1 number and total length should be at least 6"
      );
      return;
    }
    if (password !== password2) {
      setPasswordError("Password is not matching");
      return;
    }

    let phoneInNumber = +phone;

    const postData = {
      phone: phoneInNumber,
      password: password,
      password2: password2,
      gender: gender,
      role: role,
      name: {
        first: firstName,
        last: lastName,
      },
    };

    setSubmitted(true);
    AxiosConfig.post("auth/signup", postData)
      .then((res) => {
        console.log("resgister res", res);
        swal("Good job!", "Successfully registered!", "success");
        setSubmitted(false);
        addToast("Registered successfully", { appearance: "success" });
        if (res.status == 201) setIsNavigate(true);
      })
      .catch((err) => {
        if (err.response.status == 500) {
          swal("Good job!", "Successfully registered!", "success");
          setSubmitted(false);
          addToast("Registered successfully", { appearance: "success" });
          setIsNavigate(true);
          console.log("error 500", err);
          return;
        }
        console.log("register err", err);
        setSubmitted(false);
        addToast("Register failed", { appearance: "error" });
      });
  };

  if (isNavigate) {
    return <Navigate to="/login" />;
  }

  return (
    <React.Fragment>
      <Header />
      {/* <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={toastOpen}
        onClose={handleToastClose}
        message={toastMessage}
        key={vertical + horizontal}
      /> */}

      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Register</h3>
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
                        type="text"
                        id="sender-first-name"
                        className="form-control"
                        name="first-name"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user" />
                      <input
                        type="text"
                        id="sender-last-name"
                        className="form-control"
                        name="last-name"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user" />
                      <input
                        type="number"
                        id="sender-email"
                        className="form-control"
                        name="phone"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => handlePhone(e.target.value)}
                      />
                    </div>
                    {phoneError ? (
                      <div style={{ color: "red" }}> {phoneError} </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock" />
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPasswordError("");
                          setPassword(e.target.value);
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
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => {
                          setPasswordError("");
                          setPassword2(e.target.value);
                        }}
                      />
                    </div>
                    {passwordError ? (
                      <div style={{ color: "red" }}> {passwordError} </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <select
                        className="form-control"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="" defaultValue={""}>
                          Select gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <select
                        className="form-control"
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="" defaultValue={""}>
                          Select role
                        </option>
                        <option value="recruiter">Recruiter</option>
                        <option value="applicant">Applicant</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    hidden={submitted}
                    className="btn btn-primary log-btn"
                  >
                    Register
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
                    <NavLink to="/login">Already have an account?</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RegisterPage;
