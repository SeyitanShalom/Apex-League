import React from "react";
import lineUps from "@/data/lineUp";

const LineUps = () => {
  // Helper function to get background color based on position
  const getBgColor = (position) => {
    switch (position) {
      case "Goalkeeper":
        return "bg-green-700";
      case "Defender":
        return "bg-blue-700";
      case "Midfielder":
        return "bg-yellow-600";
      case "Forward":
        return "bg-red-700";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="flex justify-between gap-10 text-sm">
      {lineUps.map((lineUp) => (
        <div
          key={lineUp.id}
          className={`w-1/2 p-4 space-y-4 ${
            lineUp.id === 1 ? "text-left" : "text-right"
          } `}
        >
          <div>
            <h3 className="font-semibold text-gray-400">Coach</h3>
            <p>{lineUp.coach}</p>
          </div>
          <ul>
            <p className="text-sm font-semibold text-gray-400 mb-2">
              {" "}
              Starting XI
            </p>
            {lineUp.players.slice(0,11).map((player) => (
              <li key={player.number} className="">
                {lineUp.id === 1 ? (
                  <span className="flex items-center gap-1 justify-start mb-2">
                    <p
                      className={`w-5 h-5 flex items-center justify-center text-xs text-white rounded-full ${getBgColor(
                        player.position
                      )}`}
                    >
                      {player.number}
                    </p>
                    {player.name}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 justify-end mb-2">
                    {player.name}
                    <p
                      className={`w-5 h-5 flex items-center justify-center text-xs text-white rounded-full ${getBgColor(
                        player.position
                      )}`}
                    >
                      {player.number}
                    </p>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <ul>
            <p className="text-sm font-semibold text-gray-400 mb-2">
              Subs
            </p>
            {lineUp.players.slice(11,17).map((player) => (
              <li key={player.number} className="">
                {lineUp.id === 1 ? (
                  <span className="flex items-center gap-1 justify-start mb-2">
                    <p
                      className={`w-5 h-5 flex items-center justify-center text-xs text-white rounded-full ${getBgColor(
                        player.position
                      )}`}
                    >
                      {player.number}
                    </p>
                    {player.name}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 justify-end mb-2">
                    {player.name}
                    <p
                      className={`w-5 h-5 flex items-center justify-center text-xs text-white rounded-full ${getBgColor(
                        player.position
                      )}`}
                    >
                      {player.number}
                    </p>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LineUps;
