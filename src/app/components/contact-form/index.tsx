'use client';
import React, { useState } from "react";

const ContactForm = () => {
    const [from, setFrom] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    
    const handleSubmit = async () => {
        setStatus("Sending...");
        try {
          const formData = {
            email: from,
            subject: subject,
            message: message,
          };
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            setStatus("Email sent successfully!");
          } else {
            setStatus("Failed to send email.");
          }
        } catch (error) {
          console.error(error);
          setStatus("An error occurred.");
        }
    };

    return (
        <div 
        className="my-10 w-full overflow-hidden rounded border border-transparent bg-white text-gray-900 shadow-lg dark:border-violet-800/60 dark:bg-violet-950/85 dark:text-gray-200">
        <form
        onSubmit={handleSubmit}
        className="mx-auto space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-violet-950/70"
        >
        <div>
            <label className="block text-sm font-medium">Email</label>
            <input
            type="email"
            name="email"
            required
            value={from} onChange={(e)=>{setFrom(e.target.value)}}
            className="mt-1 block w-full rounded-md bg-gray-300 px-4 py-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700 dark:bg-violet-900/90 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:ring-violet-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
            type="text"
            name="subject"
            required
            value={subject} onChange={(e)=>{setSubject(e.target.value)}}
            className="mt-1 block w-full rounded-md bg-gray-300 px-4 py-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700 dark:bg-violet-900/90 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:ring-violet-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
            name="message"
            required
            rows={4}
            value={message} onChange={(e)=>{setMessage(e.target.value)}}
            className="mt-1 block w-full rounded-md bg-gray-300 px-4 py-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700 dark:bg-violet-900/90 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:ring-violet-500"
            ></textarea>
        </div>
        <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md 
            hover:bg-green-700"
        >
            Send Message
        </button>
        </form>
        <p className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-300">{status}</p>
    </div>
  );
};

export default ContactForm;
