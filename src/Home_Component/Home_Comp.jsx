import React, { useState, useEffect, useCallback } from "react";

export default function Home_Comp() {
  const [colors, setColors] = useState(
    Array(9)
      .fill("bg-blue-900")
      .map((c, i) => (i === 8 ? "bg-red-900" : c))
  );
  const [clicked, setClicked] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = useCallback((index) => {
    if (isAnimating) return;
    
    setClicked((prevClicked) => {
      const filtered = prevClicked.filter((i) => i !== index);
      return [index, ...filtered];
    });
    setColors((prev) => prev.map((c, i) => (i === index ? "bg-red-900" : c)));
  }, [isAnimating]);

  useEffect(() => {
    if (clicked.length === 0 || clicked[0] !== 8) return;

    const runSequence = async () => {
      setIsAnimating(true);
      
      for (let i = 0; i < clicked.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setColors((prev) =>
          prev.map((c, j) => (j === clicked[i] && j !== 8 ? "bg-blue-900" : c))
        );
      }
      
      setClicked([]);
      setIsAnimating(false);
    };

    runSequence();
  }, [clicked]);

  return (
    <div className="flex justify-center items-center bg-gray-300 rounded-lg w-[250px] h-[250px] md:w-[335px] md:h-[337px] lg:w-[385px] lg:h-[385px] p-8 transition-all duration-500">
      <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 w-full h-full shadow-md shadow-gray-600 ">
        {colors.map((bgColor, index) => (
          <div
            key={index}
            className={`rounded-lg ${bgColor} w-full h-full transition-all duration-500 shadow-md`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}