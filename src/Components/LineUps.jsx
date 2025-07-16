import React from "react";
import { lineUps } from "@/data/lineUp";
import { matches } from "@/data/matches";
import { useParams } from "next/navigation";

const LineUps = () => {
  const { slug } = useParams();
  const match = matches.find((match) => String(match.id) === slug);

  if (!match) return <h2 className="text-center my-20">Match not found.</h2>;

  const homeLineUp = lineUps.find((lineUp) => lineUp.team === match.home);
  const awayLineUp = lineUps.find((lineUp) => lineUp.team === match.away);

  if (!homeLineUp || !awayLineUp)
    return <div className="text-center my-20">Line-ups not found.</div>;

  const getBgColor = (position) => {
    switch (position) {
      case "Goalkeeper":
        return "bg-green-300";
      case "Defender":
        return "bg-blue-300";
      case "Midfielder":
        return "bg-yellow-300";
      case "Forward":
        return "bg-red-300";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="flex justify-between gap-10 text-sm font-medium text-gray-800 ">
      {[homeLineUp, awayLineUp].map((lineUp) => (
        <div
          key={lineUp.id}
          className={`w-1/2 p-5 space-y-4 ${
            lineUp === homeLineUp ? "text-left" : "text-right"
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
            {lineUp.players.slice(0, 11).map((player) => (
              <li key={player.number} className="">
                {lineUp === homeLineUp ? (
                  <span className="flex items-center gap-2 justify-start mb-2">
                    <p
                      className={`w-5 h-5 flex items-center justify-center text-xs text-gray-800 rounded-full ${getBgColor(
                        player.position
                      )}`}
                    >
                      {player.number}
                    </p>
                    {player.name}
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-end mb-2">
                    {player.name}
                    <p
                      className={`w-5 h-5 flex items-center justify-center text-xs text-gray-800 rounded-full ${getBgColor(
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
            <p className="text-sm font-semibold text-gray-400 mb-2">Subs</p>
            {lineUp.players.slice(11, 17).map((player) => (
              <li key={player.number} className="">
                {lineUp === homeLineUp ? (
                  <span className="flex items-center gap-2 justify-start mb-2">
                    <p
                      className={`w-5 h-5 flex items-center justify-center text-xs text-gray-800 rounded-full ${getBgColor(
                        player.position
                      )}`}
                    >
                      {player.number}
                    </p>
                    {player.name}
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-end mb-2">
                    {player.name}
                    <p
                      className={`w-5 h-5 flex items-center justify-center text-xs text-gray-800 rounded-full ${getBgColor(
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
