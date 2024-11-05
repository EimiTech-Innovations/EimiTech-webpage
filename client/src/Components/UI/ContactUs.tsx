import React from "react";
import telephone from "../../assets/telephone.svg"
import { Link } from "react-router-dom";


export const ContactUs: React.FC = () => {
  return (
    <>
      <section className="bg-no-repeat bg-cover bg-heroBg">
        <div className="container flex flex-col items-center justify-center py-12 mx-auto md:flex-row md:gap-28 lg:gap-52 ">
          <img className="w-full px-5 md:px-0 md:w-1/3" src={telephone} alt="Telephone" />
          <div className="flex flex-col w-full px-5 mt-8 md:px-0 md:w-1/3">
            <h2 className="mb-1 text-2xl font-bold ">Contact Us</h2>
            <p className="mb-5 text-gray-600">Do you have any questions or would you like to request a service?</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
            </div>
            <button className="px-6 py-2 text-lg border-0 rounded bg-btnBg text-bgText hover:bg-btnHover focus:outline-none">Submit </button>
            <p className="mt-3 text-xs "> We will get back to you as soon as possible,
              <Link to={"/login"} className="text-bgText "> Click here to Register/Login</Link>
            </p>
          </div>
        </div>
      </section>

    </>

  )
};