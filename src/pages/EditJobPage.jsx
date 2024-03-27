import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import JobForm from "../components/JobForm";


const EditJobPage = () => {

  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["item"],
    queryFn: () => fetch(`/api/jobs/${id}`).then((res) => res.json()),
  });


  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div className="mt-24 px-4 max-w-2xl mx-auto">
      <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <JobForm data={data}/>
      </div>
    </div>
  );
};

export default EditJobPage;
