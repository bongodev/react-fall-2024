import React from 'react'

 export function Contact() {
  return (
        <div className="w-full h-screen flex flex-col justify-center items-center p-6">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <form className="w-[30%] p-6 rounded-lg flex flex-col gap-4">
            <input className="border p-2 rounded" type="text" placeholder="Your Name" />
            <input className="border p-2 rounded" type="email" placeholder="Your Email" />
            <textarea className="border p-2 rounded" rows="4" placeholder="Your Message"></textarea>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      );
}

