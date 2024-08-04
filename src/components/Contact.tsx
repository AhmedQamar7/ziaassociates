"use client"
import React from "react";
import { Button } from "./ui/button";

const Contact = () => {

  return (
    <section className="text-black body-font relative" id='contact'>
      <h2 className="mb-2 font-semibold text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Contact Us
      </h2>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.9616621845516!2d67.14812387401199!3d24.86515894507205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bfc2c87c07b%3A0x406fef079ff1d33!2sZia%20Associates!5e0!3m2!1sen!2s!4v1722440504084!5m2!1sen!2s"
          />

          <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-white">
                Zia Associates, Saima Luxury Homes, Bagh-e-Korangi, Karachi
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="leading-relaxed text-white">muhammadahmedqamar07@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-white">+92 349-7009214</p>
            </div>
          </div>
        </div>

        {/* FORM  */}

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">
            Want to Know More?
            <br />
            Feel Free to Contact Us
          </h2>
          <br />

          <form
            action="https://formspree.io/f/mvgpaoyd"
            method="POST"
          >
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required />
            </div>

            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                Contact No:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required />
            </div>

            <div className="relative mb-4">
              <label htmlFor="category" className="leading-7 text-sm text-gray-600">
                Category:
              </label>
              <select
                id="category"
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                required >
                <option value="240bm">240 SYD WITH BASEMENT BUNGLOW</option>
                <option value="240">240 DOUBLE STORY SYD BUNGLOW</option>
                <option value="160g1">160 SYD GROUND+1 BUNGLOW</option>
                <option value="160">160 SYD SINGLE STORY BUNGLOW</option>
                <option value="120g1">120 SYD GROUND+1 BUNGLOW</option>
                <option value="1201u">120 SYD ONE UNIT BUNGLOW</option>
                <option value="120">120 SYD SINGLE STORY BUNGLOW</option>
                <option value="120p">120 SYD BUNGLOW PLOTS</option>
                <option value="240p">240 SYD BUNGLOW PLOTS</option>
              </select>
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-800 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                required
              />
            </div>

            <Button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black rounded text-lg duration-300">
              Submit
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;      