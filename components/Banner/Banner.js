import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[300px] lg:h-[300px] xl:h-[450px]  2xl:h-[550px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 font-bold bg-white px-6 py-2 md:px-10 md:py-4 rounded-full shadow-md mt-2 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;