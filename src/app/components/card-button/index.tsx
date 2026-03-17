import Image from "next/image";
import { JSX } from "react";

const CardButton = ({
  title,
  description,
  image,
  hashtags,
}: {
  title: string;
  description: string;
  image: string;
  hashtags: string[];
}): JSX.Element => {
  return (
    <div className="rounded shadow-lg bg-white p-6 flex flex-col md:flex-row gap-3 w-full">

      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={300}
          height={220}
          className="w-full md:w-[280px] h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">

        <h3 className="font-bold text-xl mb-2">
          {title}
        </h3>

        <p className="text-gray-700 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
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