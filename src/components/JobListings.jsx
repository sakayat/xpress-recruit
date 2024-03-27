import { useQuery } from "@tanstack/react-query";

import SectionTitle from "./SectionTitle";
import ListingCard from "./ListingCard";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["list"],
    queryFn: () => fetch("/api/jobs").then((res) => res.json()),
  });

  const jobListing = isHome ? data?.slice(0, 3) : data;

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <section className="flex flex-col gap-8 py-10">
      <SectionTitle title={isHome ? "Recent Jobs" : "Browse Jobs"} />
      <div className="bg-light-blue px-4 rounded-md py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListing.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      {isHome && (
        <Link
          to="/jobs"
          className="bg-black text-white py-4 w-96 mx-auto text-center rounded-md"
        >
          View All Jobs
        </Link>
      )}
    </section>
  );
};

export default JobListings;
