/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { IJob } from "../../interfaces";

const JobItem = ({ job }: { job: IJob }) => {
  const randomIntFromInterval = () => {
    let n = Math.floor(Math.random() * 6 + 1);
    return `assets/img/features/img${n}.png`;
  };

  const get_type = (type: string) => {
    const types: any = {
      "Full Time": "Full Time",
      "Part Time": "Part Time",
      Internship: "Internship",
    };
    return types[type];
  };

  const get_class = (type: string) => {
    const class_name: any = {
      "Full Time": "Full Time",
      "Part Time": "Part Time",
      Internship: "Internship",
    }[type];

    return class_name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  console.log("in jobitem file", job.tags);

  return (
    <div className="col-lg-4 col-md-6 col-xs-12">
      <Link to={`/jobs/${job._id}`}>
        {
          <div className="job-featured">
            <div className="icon">
              <img src={randomIntFromInterval()} alt="" />
            </div>
            <div className="content">
              <h3>{job.title}</h3>
              <p className="brand">{job.company}</p>
              <div className="tags">
                <span>
                  <i className="lni-map-marker" /> {job.location}
                </span>
                <br />
                <span>
                  <i className="lni-user" />
                  {job.company}
                </span>
              </div>
              <span className={get_class(String(job.type))}>
                {get_type(String(job.type))}
              </span>
              <br />
              <br />
              Tags:
              {job.tags?.map((tag: any, index) => {
                return (
                  <span
                    key={index}
                    className="full-time"
                    style={{ color: "#fff", backgroundColor: "#000" }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        }
      </Link>
    </div>
  );
};

export default JobItem;
