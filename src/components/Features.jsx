import Card from "./Card";

const featuresInfo = [
  {
    id: 1,
    title: "For Developers",
    des: " Browse our React jobs and start your career today",
    button: "Browse Jobs",
    href: "jobs",
  },
  {
    id: 2,
    title: "For Employers",
    des: "List your job to find the perfect developer for the role",
    button: " Add Job",
    href: "add-job",
  },
];

const Features = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 rounded-lg">
          {featuresInfo.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
