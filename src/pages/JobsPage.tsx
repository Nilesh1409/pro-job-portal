/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import AxiosConfig from "../AxiosConfig";
import Header from "../components/Header";
import JobItem from "../components/job/JobItem";
import { Helmet } from "react-helmet";
import { JobContext } from "../contexts/JobContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import JobItemSkeleton from "../components/skeletons/JobItemSkeleton";
import BaseLayout from "../components/BaseLayout";
import { IJob } from "../interfaces";

const JobsPage = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [visibleJobs, setVisibleJobs] = useState<IJob[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const jobContext = useContext(JobContext);
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const onLoadMore = () => {
    const currentIndex = visibleJobs.length;
    const nextIndex = currentIndex + 10;
    const nextJobs = jobs.slice(currentIndex, nextIndex);
    setVisibleJobs([...visibleJobs, ...nextJobs]);
    if (nextIndex >= jobs.length) setShowLoadMore(false); // hide the button if there are no more jobs
  };

  useEffect(() => {
    // const fetchData = async () => {
    //     await jobContext.jobDispatch({type: jobContext.ActionTypes.ALL_JOBS});
    //     console.log(jobContext.jobState)
    //     setJobs(jobContext.jobState.jobs);
    // };
    //
    // fetchData();
    AxiosConfig.get("jobs/")
      .then((res) => {
        setJobs(res.data.payLoad);
        console.log("res in get jobs", res.data.payLoad);
        setVisibleJobs(res.data.payLoad.slice(0, 10)); // show first 10 jobs
        if (res.data.payLoad.length <= 10) setShowLoadMore(false);
      })
      .catch((err) => setError(err));
  }, []);

  const onSearch: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const filteredJobs = jobs.filter((job) => {
      const positionMatch = job.title
        ?.toLowerCase()
        .trim()
        .includes(position?.toLowerCase().trim());
      console.log("position", job.title, position);
      let locationMatch = false;
      if (location)
        locationMatch = job.location
          ?.toLowerCase()
          .trim()
          .includes(location?.toLowerCase().trim());
      console.log(
        "positionMatch || locationMatch",
        positionMatch,
        locationMatch
      );
      return positionMatch || locationMatch;
    });
    console.log("filteredJobs", filteredJobs);
    setVisibleJobs(filteredJobs.slice(0, 10));
    if (filteredJobs.length <= 10) setShowLoadMore(false);
  };

  return (
    <BaseLayout title={"All jobs"}>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Find your desired job</h3>
              </div>
              <div className="job-search-form bg-cyan job-featured-search">
                <form>
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-5 col-xs-12">
                      <div className="form-group">
                        <input
                          onChange={(e) => setPosition(e.target.value)}
                          className="form-control"
                          type="text"
                          placeholder="Position"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-xs-12">
                      <div className="form-group">
                        <input
                          onChange={(e) => setLocation(e.target.value)}
                          className="form-control"
                          type="text"
                          placeholder="Location"
                        />
                        <i className="lni-map-marker" />
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-xs-12">
                      <button
                        type="button"
                        onClick={onSearch}
                        className="button"
                      >
                        <i className="lni-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="featured" className="section bg-cyan">
        <div className="container">
          <div className="row">
            {visibleJobs.length === 0 && (
              <>
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <JobItemSkeleton key={index} />
                  ))}
              </>
            )}
            {
              //  jobs.length ? console.log('123') :
              visibleJobs.length &&
                visibleJobs.map((job, index) => {
                  console.log(index, job);
                  return <JobItem job={job} key={job._id} />;
                })
            }
          </div>
        </div>
        {showLoadMore && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={onLoadMore}>
              Load More
            </button>
          </div>
        )}
      </section>
    </BaseLayout>
  );
};

export default JobsPage;
