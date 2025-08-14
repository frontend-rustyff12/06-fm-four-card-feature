import { cardData } from "../data/data";
export default function Cards() {
  const gridPositions = [
    "md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-4",
    "md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3",
    "md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-5",
    "md:col-start-5 md:col-end-7 md:row-start-2 md:row-end-4",
  ];

  const accentColors = [
    "bg-custom-Cyan",
    "bg-custom-Red",
    "bg-custom-Orange",
    "bg-custom-Blue",
  ];

  const cardElements = cardData.map((item, index) => {
    return (
      <article
        className={`relative p-8 flex flex-col gap-2 first-of-type:mt-8 bg-white rounded-xl overflow-hidden shadow-[0px_5px_16px_0px_rgba(0,_0,_0,_0.2)] last-of-type:mb-8 aspect-[4/3] ${gridPositions[index]}`}
        key={index}
      >
        <div
          className={`absolute top-0 left-0 w-full h-1.25 rounded-t-xl -mb-5 ${accentColors[index]}`}
        ></div>
        <h3 className="text-custom-Grey-500 text-xl font-semibold">
          {item.title}
        </h3>
        <p className="text-custom-Grey-400 text-sm">{item.description}</p>
        <img className="w-18 self-end my-6" src={item.image} alt="" />
      </article>
    );
  });

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-6 md:grid-rows-4 ">
      {cardElements}
    </section>
  );
}
