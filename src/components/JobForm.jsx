import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobForm = ({ data }) => {
  const [title, setTitle] = useState(`${data ? data.title : ""}`);
  const [type, setType] = useState(`${data ? data.type : "Full-Time"}`);
  const [location, setLocation] = useState(`${data ? data.location : ""}`);
  const [description, setDescription] = useState(
    `${data ? data.description : ""}`
  );
  const [salary, setSalary] = useState(`${data ? data?.salary : "Under $50K"}`);
  const [companyName, setCompanyName] = useState(
    `${data ? data.company.name : ""}`
  );
  const [companyDescription, setCompanyDescription] = useState(
    `${data ? data.company.description : ""}`
  );
  const [contactEmail, setContactEmail] = useState(
    `${data ? data.company.contactEmail : ""}`
  );
  const [contactPhone, setContactPhone] = useState(
    `${data ? data.company.contactPhone : ""}`
  );

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/jobs", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now().toString(),
        type,
        title,
        location,
        description,
        salary,
        company: {
          name: companyName,
          description: companyDescription,
          contactEmail: contactEmail,
          contactPhone: contactPhone,
        },
      }),
    });

    if (res.ok) {
      return navigate("/jobs");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/jobs/${data.id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        type,
        location,
        description,
        salary,
        company: {
          name: companyName,
          description: companyDescription,
          contactEmail: contactEmail,
          contactPhone: contactPhone,
        },
      }),
    });

    if (res.ok) {
      return navigate(`/job/${data.id}`);
    }
  };

  return (
    <form>
      <h2 className="text-3xl text-center font-semibold mb-6">{`${
        data ? "Edit Jobs" : "Add Jobs"
      }`}</h2>

      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          Job Type
        </label>
        <select
          id="type"
          name="type"
          className="border rounded w-full py-2 px-3"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Job Listing Name
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="eg. Beautiful Apartment In Miami"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add any job duties, expectations, requirements, etc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          Salary
        </label>
        <select
          id="salary"
          name="salary"
          className="border rounded w-full py-2 px-3"
          required
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        >
          <option value="Under $50K">Under $50K</option>
          <option value="$50K - 60K">$50K - $60K</option>
          <option value="$60K - 70K">$60K - $70K</option>
          <option value="$70K - 80K">$70K - $80K</option>
          <option value="$80K - 90K">$80K - $90K</option>
          <option value="$90K - 100K">$90K - $100K</option>
          <option value="$100K - 125K">$100K - $125K</option>
          <option value="$125K - 150K">$125K - $150K</option>
          <option value="$150K - 175K">$150K - $175K</option>
          <option value="$175K - 200K">$175K - $200K</option>
          <option value="Over $200K">Over $200K</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Company Location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <h3 className="text-2xl mb-5">Company Info</h3>
      <div className="mb-4">
        <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="border rounded w-full py-2 px-3"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="company_description"
          className="block text-gray-700 font-bold mb-2"
        >
          Company Description
        </label>
        <textarea
          id="company_description"
          name="company_description"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="What does your company do?"
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="contact_email"
          className="block text-gray-700 font-bold mb-2"
        >
          Contact Email
        </label>
        <input
          type="email"
          id="contact_email"
          name="contact_email"
          className="border rounded w-full py-2 px-3"
          placeholder="Email address for applicants"
          required
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="contact_phone"
          className="block text-gray-700 font-bold mb-2"
        >
          Contact Phone
        </label>
        <input
          type="tel"
          id="contact_phone"
          name="contact_phone"
          className="border rounded w-full py-2 px-3"
          placeholder="Optional phone for applicants"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />
      </div>
      {data ? (
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleUpdate}
        >
          Update Jobs
        </button>
      ) : (
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSubmit}
        >
          Add Jobs
        </button>
      )}
    </form>
  );
};

export default JobForm;
