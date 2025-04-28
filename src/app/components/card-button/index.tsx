import Image from 'next/image';
import React from 'react';
import { JSX } from "react";

const CardButton = ({ 
    title, 
    description, 
    image,
    hashtags, 
}: {
    title: string,
    description: string,
    image: string,
    hashtags: string[]
}): JSX.Element => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white py-5 pl-5 justify-center items-center">
      <Image 
        width={250} 
        height={200}
        className="w-[30%] sm:h-[300px] sm:w-auto" 
        src={image} alt={title}
      />
      <div className="w-1/2 px-5 mr-2 mb-2">
        <div className="w-[60%] font-bold text-xl py-2">{title}</div>
        <p className="w-[60%]">
          {description}
        </p>

        <div className="w-[60%] flex flex-wrap gap-2 mt-4">
          {hashtags.map((item, index) => (
            <span
              key={index}
              className="bg-gray-300 rounded-full px-3 py-1 text-sm 
              hover:bg-gray-600 hover:text-white font-semibold text-black"
            >
              #{item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardButton;