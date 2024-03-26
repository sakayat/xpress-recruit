import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useState } from "react";

const ListingCard = ({ item }) => {
  const [fullDescription, setFullDescription] = useState(false);

  let desc = item.description;

  if (!fullDescription) {
    desc = desc.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{item.type}</div>
          <h3 className="text-xl font-bold">{item.title}</h3>
        </div>
        <div className={`mb-5`}>{desc}</div>
        <button
          className="text-indigo-500 mb-5 hover:text-indigo-600"
          onClick={() => setFullDescription(!fullDescription)}
        >
          {fullDescription ? "Less" : "More"}
        </button>
        <h3 className="text-indigo-500 mb-2">{item.salary} / Year</h3>
        <div className="flex flex-col lg:flex-row justify-between my-4">
          <div className="text-orange-700 flex">
            <MapPin className="text-lg mr-1" />
            <div className="border border-gray-100 mb-5">{item.location}</div>
          </div>
          <Link
            to={`/jobs`}
            className="h-[36px] bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>

      
     

    


    </div>
  );
};

export default ListingCard;
