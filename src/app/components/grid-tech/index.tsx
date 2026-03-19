'ue client';
import React from 'react';
import content from "../../content.json";
import Image from 'next/image';

const GridTech = () => {
    return(
        <div>
            <div>
            <h2 className="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight py-2">
            Programming Languages
            </h2>
            <div className="grid grid-cols-5 gap-4 rounded-lg border border-transparent bg-white px-3 shadow sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 dark:border-violet-800/60 dark:bg-violet-950/80 dark:text-gray-200">
            {content.home.languages.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-2">
                <Image
                    width={100} height={100}
                    src={item.img}
                    alt={`language-${index}`}
                    className="h-12 object-contain px-1 
                    transform transition-transform duration-700 hover:rotate-[360deg]"
                    />
                <p>{item.name}</p>
                </div>
            ))}
            </div>

            <h2 className="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight mt-5 pb-2">
            Databases
            </h2>
            <div className="grid grid-cols-5 gap-4 rounded-lg border border-transparent bg-white px-3 shadow sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 dark:border-violet-800/60 dark:bg-violet-950/80 dark:text-gray-200">
            {content.home.databases.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-2">
                <Image
                    width={100} height={100}
                    src={item.img}
                    alt={`language-${index}`}
                    className="h-12 object-contain px-1 
                    transform transition-transform duration-700 hover:rotate-[360deg]"
                />
                <p>{item.name}</p>
            </div>
            ))}
            </div>

            <h2 className="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight mt-5 pb-2">
            Frameworks
            </h2>
            <div className="grid grid-cols-5 gap-4 rounded-lg border border-transparent bg-white px-3 shadow sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 dark:border-violet-800/60 dark:bg-violet-950/80 dark:text-gray-200">
            {content.home.frameworks.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-2">
                <Image
                    width={100} height={100}
                    src={item.img}
                    alt={`language-${index}`}
                    className="h-12 object-contain px-1 
                    transform transition-transform duration-700 hover:rotate-[360deg]"
                />
                <p>{item.name}</p>
                </div>
            ))}
            </div>

            <h2 className="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight mt-5 pb-2">
            Web Technologies
            </h2>
            <div className="grid grid-cols-5 gap-4 rounded-lg border border-transparent bg-white px-3 shadow sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 dark:border-violet-800/60 dark:bg-violet-950/80 dark:text-gray-200">
            {content.home.webtech.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-2">
                <Image
                    width={100} height={100}
                    src={item.img}
                    alt={`language-${index}`}
                    className="h-12 object-contain px-1 
                    transform transition-transform duration-700 hover:rotate-[360deg]"
                />
                <p>{item.name}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}

export default GridTech;
