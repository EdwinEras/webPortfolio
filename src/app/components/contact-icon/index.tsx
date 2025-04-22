'use client';
import { JSX } from "react";

const ContactIcon = ({ 
    name,
    image,
    color,
    href
}: {
    name: string,
    image: string,
    color: string,
    href: string
}): JSX.Element => {
  return (
    <div>
        <a  
        href={href}
        style={{ '--hover-bg': color } as any}
        className={`bg-white hover:[background-color:var(--hover-bg)] hover:text-white rounded-md 
        px-3 py-2 text-sm font-medium flex justify-center items-center gap-2`}
        >
        {name}
        <img height={30} width={30} src={image} alt={name} />
        </a>
    </div>
  );
}

export default ContactIcon;