import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h1 className="font-bold text-[28px] text-center">
        Where Future Champions Rise!
      </h1>
      <p className="text-center text-[12px] max-w-80 mx-auto mt-2 leading-4">
        Stay updated with real-time scores, team stats, and match-day actions
        from Johnvents Apex league. Dive into fixtures, match events, and league
        tables — all in one place. Football lives here.
      </p>
      <div>
        <Image
          src="/Hero 1.png"
          alt=""
          width={400}
          height={300}
          className="mt-5"
        />
      </div>
    </div>
  );
};

export default Hero;
