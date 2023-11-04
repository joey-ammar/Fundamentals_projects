import { useEffect, useState } from "react";
import "./index.css";
import Jobsinfo from "./JobsInfo";
import Btn from "./Btn";
const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  console.log(jobs);

  return (
    <section className="jobs-center">
      {/**button container */}
      <Btn
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/**Jobs info */}
      <Jobsinfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default Tabs;
