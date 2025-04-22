'use client';
import Image from "next/image";
import Link from "next/link";
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
        <Link  
        href={href}
        style={{ '--hover-bg': color } as React.CSSProperties }
        className={`bg-white hover:[background-color:var(--hover-bg)] hover:text-white rounded-md 
        px-3 py-2 text-sm font-medium flex justify-center items-center gap-2`}
        >
        {name}
        <Image height={30} width={30} src={image} alt={name} />
        </Link>
    </div>
  );
}

export default ContactIcon;