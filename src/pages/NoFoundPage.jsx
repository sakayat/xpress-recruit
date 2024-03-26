import { CircleAlert } from "lucide-react";
import { Link } from "react-router-dom";

const NoFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-5rem)] gap-8">
      <CircleAlert size={64} />
      <span className="text-7xl">404 Not Found</span>
      <span>The Page does not exists</span>
      <Link to={"/"} className="w-fit bg-black text-white py-2 px-4 rounded-md">
        Back to Home
      </Link>
    </div>
  );
};

export default NoFoundPage;
