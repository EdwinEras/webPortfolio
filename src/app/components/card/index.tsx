'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { JSX } from "react";
import { createPortal } from 'react-dom';

const Card = ({ 
    title,
    image,
}: {
    title: string,
    image: string,
}): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const modal = showModal ? (
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[90vh] max-w-5xl items-center justify-center rounded-lg bg-white p-2 shadow-lg dark:bg-violet-950/95"
      >
        <Image
          width={800}
          height={800}
          src={image}
          alt={title}
          className="max-h-[85vh] w-auto rounded object-contain"
        />
      </div>
    </div>
  ) : null;

  return (
  <div>
    <div className="mb-5 flex h-full flex-col justify-between overflow-hidden rounded border border-transparent bg-white px-2 py-2 text-gray-900 shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl dark:border-violet-800/60 dark:bg-violet-950/80 dark:text-gray-100"
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

    {typeof document !== "undefined" ? createPortal(modal, document.body) : null}
  </div>
  );
};

export default Card;
