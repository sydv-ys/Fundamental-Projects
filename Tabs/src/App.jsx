import { useState } from "react";
import { useEffect } from "react";
import JobInfo from "./JobInfo";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const resp = await fetch(url);
      const newJobs = await resp.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    <section className="jobs-center">
      <div className="loading"></div>
    </section>;
  }

  return (
    <div className="jobs-center">
      <JobInfo jobs={jobs} />
    </div>
  );
};
export default App;
