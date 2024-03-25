const Hero = ({
  title = "Mastering React Development",
  subtitle = "Discover Your Dream React Role Aligning with Your Expertise",
}) => {
  return (
    <section className="bg-sky-blue py-24 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-black">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
