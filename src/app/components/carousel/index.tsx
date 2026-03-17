'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardButton from "../card-button";
import contact from "../../content.json";

const Carousel = () => {
  const items = contact.home.studies;
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  };

  const handleNext = () => {
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative size-full px-3 mt-10 rounded-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="min-w-full px-3">
              <CardButton
                title={item.title}
                description={item.description}
                image={item.image}
                hashtags={item.hashtags}
              />
            </div>
          ))}
        </div>

      </div>

      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200"
      >
        <ChevronRight />
      </button>

    </div>
  );
};

export default Carousel;