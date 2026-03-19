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
    <div className="rounded border border-transparent bg-white p-6 shadow-lg flex flex-col md:flex-row gap-3 w-full dark:border-violet-800/60 dark:bg-violet-950/80 dark:text-gray-100">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={300}
          height={220}
          className="w-full md:w-[280px] h-auto object-contain"
        />
      </div>
      <div className="flex flex-col flex-1">

        <h3 className="font-bold text-xl mb-2">
          {title}
        </h3>

        <p className="text-gray-700 mb-4 dark:text-gray-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {hashtags.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-300 px-3 py-1 text-sm font-semibold text-black hover:bg-gray-600 hover:text-white dark:bg-violet-900/80 dark:text-gray-200 dark:hover:bg-violet-700"
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
