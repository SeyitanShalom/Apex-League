import React from "react";
import LiveMatch from "./LiveMatch";

const LiveCategory = () => {
  return (
    <div className="mt-20">
      <h2 className="font-bold mb-2">Live</h2>
      <div className="flex gap-5">
        <LiveMatch />
        <LiveMatch />
      </div>
    </div>
  );
};

export default LiveCategory;
