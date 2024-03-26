import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import AddJobsPage from "./pages/AddJobsPage";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/add-job" element={<AddJobsPage />} />
      </Routes>
    </div>
  );
};

export default App;
