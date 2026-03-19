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
        className={`flex items-center justify-center gap-2 rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium text-gray-800 hover:[background-color:var(--hover-bg)] hover:text-white dark:border-violet-800/60 dark:bg-violet-950/80 dark:text-gray-200`}
        >
        {name}
        <Image height={30} width={30} src={image} alt={name} />
        </Link>
    </div>
  );
}

export default ContactIcon;
