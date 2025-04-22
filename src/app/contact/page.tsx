'use client';
import ContactForm from "../components/contact-form";
import ContactIcon from "../components/contact-icon";
import content from "../content.json";

export default function Page(){
    return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
                    Contact page
                </h2>
            </div>
        </div>

        <div className="my-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {content.contacts.map((item, index)=>(
                <ContactIcon key={index}
                name={item.name}
                image={item.image}
                color={item.color}
                href={item.href}
            />
            ))}
        </div>
       
        <ContactForm />
    </div>
)};