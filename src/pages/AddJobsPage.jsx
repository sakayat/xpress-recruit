import JobForm from "../components/JobForm";

const AddJobsPage = () => {
  return (
    <div className="mt-24 px-4">
      <div className="container mx-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <JobForm />
        </div>
      </div>
    </div>
  );
};

export default AddJobsPage;
