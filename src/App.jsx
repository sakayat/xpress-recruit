import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AddJobsPage from "./pages/AddJobsPage";
import NoFoundPage from "./pages/NoFoundPage";
import AllJobPostPage from "./pages/AllJobPostPage";
import JobPage from "./pages/JobPage";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<AllJobPostPage />} />
        <Route path="/job/:id" element={<JobPage />} />
        <Route path="/add-job" element={<AddJobsPage />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
