import React from "react";
import Home_Comp from "../Home_Component/Home_Comp";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 place-items-center max-w-7xl mx-auto">
      <div className="rounded-[15px] w-[250px] h-[250px] md:col-span-2 lg:col-span-1 md:w-full lg:w-[385px] md:h-[337px] lg:h-[385px] bg-[linear-gradient(to_right,rgba(51,0,255,1),rgba(250,0,255,1))] transition-all duration-1000" />
      
      <div className="rounded-[15px] w-[250px] h-[250px] md:w-[335px] md:h-[337px] lg:w-[385px] lg:h-[385px] transition-all duration-1000 flex justify-center items-center">
        <img src="../../logo.png" alt="Logo" className="w-full h-full transition-all duration-1000" />
      </div>
      
      <div>
        <Home_Comp />
      </div>
    </div>
  );
}

export default Home;