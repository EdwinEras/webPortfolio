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
        className="w-full bg-white 
        rounded overflow-hidden shadow-lg my-10">
        <form
        onSubmit={handleSubmit}
        className="mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
        >
        <div>
            <label className="block text-sm font-medium">Email</label>
            <input
            type="email"
            name="email"
            required
            value={from} onChange={(e)=>{setFrom(e.target.value)}}
            className="mt-1 block w-full px-4 text-black py-2 bg-gray-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
        </div>
        <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
            type="text"
            name="subject"
            required
            value={subject} onChange={(e)=>{setSubject(e.target.value)}}
            className="mt-1 block w-full px-4 text-black py-2 bg-gray-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
        </div>
        <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
            name="message"
            required
            rows={4}
            value={message} onChange={(e)=>{setMessage(e.target.value)}}
            className="mt-1 block w-full px-4 text-black py-2 bg-gray-300 rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-gray-700"
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
        <p>{status}</p>
    </div>
  );
};

export default ContactForm;