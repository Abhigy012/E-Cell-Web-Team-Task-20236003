import React from "react";
import '../index.css';

const Grid = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('../../background.jpg')",
        backgroundColor: "#0D0D0D", 
      }}
    >
      <div className="absolute inset-0">
        {/* Circle */}
        <div className="absolute w-16 h-16 border-4 border-pink-500 rounded-full opacity-80 blur-sm animate-orbit" style={{ top: "10%", left: "5%" }}></div>
        <div className="absolute w-24 h-24 border-4 border-red-500 rounded-full opacity-80 blur-sm animate-orbit-reverse" style={{ top: "50%", left: "80%" }}></div>

        {/* Triangle */}
        <div
          className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-purple-500 opacity-90 blur-sm animate-orbit"
          style={{ top: "70%", left: "30%" }}
        ></div>

        {/* Square */}
        <div
          className="absolute w-12 h-12 border-4 border-pink-600 opacity-90 blur-sm animate-orbit-reverse"
          style={{ bottom: "20%", right: "40%" }}
        ></div>
      </div>
      <div className="z-10 bg-[#1A1A1A] bg-opacity-85 p-8 rounded-lg shadow-lg text-center">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full border-4 border-red-600 animate-glow z-0"
            style={{
              boxShadow: "0 0 15px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6)",
              top: "50%", 
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "160px",
              height: "160px", 
            }}
          ></div>
          <img
            src="../../Abhay.jpg"
            alt="Your Name"
            className="rounded-full w-40 h-40 mx-auto mb-4 border-4 border-red-600 shadow-lg z-10"
            style={{
              position: 'relative', 
            }}
          />
        </div>
        <h1 className="text-4xl font-bold text-pink-500 font-custom">
          Abhay Goyal
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Registration Number: 20236003
        </p>

        <div className="mt-6">
          <a
            href="https://www.instagram.com/i.tz_abhay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transform transition hover:scale-105"
              style={{
                boxShadow: "0 0 20px rgba(255, 105, 180, 0.8)",
              }}
            >
              Visit My Instagram
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Grid;
