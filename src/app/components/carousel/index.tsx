'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardButton from "../card-button";
import contact from  "../../content.json"

const Carousel = () =>{
  const [index, setIndex] = useState(0);
  const total = contact.home.studies.length;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative w-full overflow-hidden mx-auto mt-10">
      <div className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${index * 100}%)`, width: `${total * 100}%` }}
      >
        {contact.home.studies.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <CardButton
              title={item.title}
              description={item.description}
              image={item.image}
              hashtags={item.hashtags}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-400"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-400"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Carousel;