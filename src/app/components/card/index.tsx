'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { JSX } from "react";

const Card = ({ 
    title,
    image,
}: {
    title: string,
    image: string,
}): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
  <div>
    <div className="flex flex-col justify-between rounded overflow-hidden shadow-lg bg-white mb-5 px-2 py-2 
      transition duration-500 hover:scale-105 hover:shadow-xl h-full"
      onClick={() => setShowModal(true)}>
      {image && (
        <Image 
        width={250} height={200}
        className="w-full" src={image} alt={title} />
      )}
      <div className="">
        <div className="font-bold text-center text-xl">{title}</div>
      </div>
    </div>

    {/* Modal / Overlay */}
    {showModal && 
      <div onClick={() => setShowModal(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      >
        <div className="max-w-3xl p-2 bg-white rounded-lg shadow-lg relative">
          <Image src={image} alt={title} className="w-full rounded" />
        </div>
      </div>
    }
  </div>
  );
};

export default Card;