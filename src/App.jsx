import Cards from "./components/Cards";

function App() {
  return (
    <main className="p-8 font-poppins h-screen">
      <div className="flex flex-col gap-5 mt-6 mb-10 text-center">
        <div className="">
          <h1 className="text-custom-Grey-400 text-2xl font-extralight">
            Reliable, efficient delivery
          </h1>
          <h2 className="text-custom-Grey-500 text-2xl font-semibold">
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
