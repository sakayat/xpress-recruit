import Features from "./components/Features";
import Hero from "./components/Hero";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";

const App = () => {
  
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Features />
      <JobListings />
    </div>
  );
};

export default App;
