import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../contexts/AuthContext";
// import {} from "rea"

const Jumbotron: FC = () => {
  const { t } = useTranslation();
  let authContext = useContext(AuthContext);

  const allCityNames: any = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Visakhapatnam",
    "Bhopal",
    "Patna",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Vadodara",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Allahabad",
    "Ranchi",
    "Howrah",
    "Coimbatore",
    "Gwalior",
    "Vijayawada",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Chandigarh",
    "Guntur",
    "Guwahati",
    "Solapur",
    "Hubli-Dharwad",
    "Mysore",
    "Tiruchirappalli",
    "Bareilly",
    "Aligarh",
    "Tiruppur",
    "Moradabad",
    "Gorakhpur",
    "Saharanpur",
    "Kollam",
    "Thrissur",
    "Kozhikode",
    "Bhubaneswar",
    "Gurgaon",
    "Kochi",
    "Thiruvananthapuram",
    "Bhiwandi",
    "Salem",
    "Dehradun",
    "Puducherry",
    "Asansol",
    "Nanded",
    "Kannur",
    "Jamnagar",
    "Hisar",
    "Tirupati",
    "Bongaigaon",
    "Agartala",
    "Hoshiarpur",
    "Bahraich",
    "Dibrugarh",
    "Kakinada",
    "Siwan",
    "Itanagar",
    "Darbhanga",
    "Tezpur",
    "Imphal",
    "Karimnagar",
    "Rewari",
    "Karwar",
    "Thiruvallur",
    "Shimoga",
    "Haldia",
    "Dharmavaram",
    "Baripada",
    "Barmer",
    "Madikeri",
    "Mandya",
    "Jorhat",
    "Udupi",
    "Hassan",
    "Ratlam",
    "Durgapur",
    "Chikmagalur",
    "Nizamabad",
    "Kashipur",
    "Bettiah",
    "Jalgaon",
    "Mandvi",
    "Mangalore",
    "Nellore",
    "Ongole",
    "Kharagpur",
    "Thanjavur",
    "Nagercoil",
    "Kavali",
    "Palakkad",
    "Muzaffarnagar",
    "Kurnool",
    "Bhavnagar",
    "Srikakulam",
    "Korba",
    "Suryapet",
    "Sangli",
    "Vizianagaram",
    "Firozpur",
    "Bulandshahr",
  ];

  return (
    <div className="container">
      <div className="row space-100">
        <div className="col-lg-7 col-md-12 col-xs-12">
          <div className="contents">
            <h2 className="head-title">
              {t("welcome.title1")} <br /> {t("welcome.title2")}
            </h2>
            <p>
              Discover your perfect career fit based on your unique lifestyle
              and goals. Use our resources and tools to find the job that fits
              your life today.
            </p>
            <div className="job-search-form">
              {/* <form>
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-xs-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Job Title or Company Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-xs-12">
                    <div className="form-group">
                      <div className="search-category-container">
                        <label className="styled-select">
                          <select>
                          <option value="none">None</option>
                            {allCityNames?.map(
                              (city: string, index: Number) => {
                                return <option value={city}>{city}</option>;
                              }
                            )}
                          </select>
                        </label>
                      </div>
                      <i className="lni-map-marker" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-xs-12">
                    <button type="submit" className="button">
                      <i className="lni-search" />
                    </button>
                  </div>
                </div>
              </form> */}
              {authContext?.state?.user?.role === "recruiter" ? (
                ""
              ) : (
                <NavLink
                  style={{ borderRadius: "25px" }}
                  className="search-job button btn btn-common"
                  //
                  to={authContext?.state?.isAuthenticated ? "/jobs" : "/login"}
                >
                  Find Job
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-xs-12">
          <div className="intro-img">
            <img src="assets/img/intro.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
