import Cards from "./components/Cards";

function App() {
  return (
    <main className="p-8 font-poppins  md:flex md:flex-col md:justify-center md:items-center md:py-20 md:px-26">
      <div className="flex flex-col gap-5 mt-6 mb-10 text-center md:w-xl">
        <div className="">
          <h1 className="text-custom-Grey-400 text-2xl font-extralight md:text-4xl md:mb-4">
            Reliable, efficient delivery
          </h1>
          <h2 className="text-custom-Grey-500 text-2xl font-semibold md:text-4xl">
            Powered by Technology
          </h2>
        </div>

        <p className="text-custom-Grey-400">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <Cards />
    </main>
  );
}

export default App;
