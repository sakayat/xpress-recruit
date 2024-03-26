import SectionTitle from "./SectionTitle";
import ListingCard from "./ListingCard";
import { Link } from "react-router-dom";
import data from "../jobsdata.json";

const JobListings = () => {
  return (
    <section className="flex flex-col gap-8 py-10">
      <SectionTitle title={"Browse Jobs"} />
      <div className="bg-grayish-brown px-4 rounded-md py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.jobs.map((item, index) => (
            <ListingCard key={index} item={item} />
          ))}
        </div>
      </div>
      <Link
        to="/jobs"
        className="bg-black text-white py-4 w-96 mx-auto text-center rounded-md"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default JobListings;
