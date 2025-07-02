import React from "react";
import Fixture from "./Fixture";

const FixtureCategory = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mb-20 mt-10">
        <h2 className="font-bold mb-2">Fixtures</h2>
        <div className="flex gap-5">
          <Fixture />
          <Fixture />
        </div>
      </div>
    </div>
  );
};

export default FixtureCategory;
