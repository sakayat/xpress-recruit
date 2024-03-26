import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
