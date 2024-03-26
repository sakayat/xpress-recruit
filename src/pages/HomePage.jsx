import Features from "../components/Features";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <JobListings isHome = {true}/>
    </>
  );
};

export default HomePage;
