import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className={`${item.id === 1 ? "bg-light-blue" : "bg-grayish-brown"} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{item.title}</h2>
      <p className="mt-2 mb-4">
        {item.des}
      </p>
      <Link
        to={item.href}
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {item.button}
      </Link>
    </div>
  );
};

export default Card;
