import React from "react";
import { FaFutbol, FaArrowRight, FaExchangeAlt } from "react-icons/fa";
import { IoMdCard } from "react-icons/io";

const events = [
  {
    minute: 16,
    type: "goal",
    player: "Player A",
    team: "Team A",
    description: "Goal",
  },
  {
    minute: 22,
    type: "yellow",
    player: "Player B",
    team: "Team B",
    description: "Yellow Card",
  },
  {
    minute: 45,
    type: "sub",
    player: "Player C",
    subIn: "Player D",
    team: "Team A",
    description: "Substitution",
  },
  {
    minute: 60,
    type: "goal",
    player: "Player F",
    team: "Team B",
    description: "Goal",
  },
  {
    minute: 70,
    type: "red",
    player: "Player E",
    team: "Team A",
    description: "Red Card",
  },
  {
    minute: 80,
    type: "sub",
    player: "Player B",
    subIn: "Player G",
    team: "Team B",
    description: "Substitution",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "goal":
      return <FaFutbol className="text-green-600" />;
    case "yellow":
      return (
        <div className="inline-block w-3 h-4 rounded-xs bg-yellow-500"></div>
      );
    case "sub":
      return <FaExchangeAlt className="text-blue-500" />;
    case "red":
      return <div className="inline-block w-3 h-4 rounded-xs bg-red-500"></div>;
    default:
      return null;
  }
};

const MatchEvents = () => {
  return (
    <div className="text-md font-medium text-gray-800 p-4">
      <h2 className="text-xl border-b-2 border-gray-300 font-bold text-gray-800 mb-4">
        Match Events
      </h2>
      <div className="flex flex-col gap-4">
        {events.map((event, idx) => (
          <div key={idx} className="flex items-center justify-between">
            {/* Left side (Team A) */}
            <div
              className={`flex-1 flex ${
                event.team === "Team A" ? "justify-end" : "justify-start"
              }`}
            >
              {event.team === "Team A" && (
                <div className="flex items-center gap-2">
                  {event.type === "sub" ? (
                    <div className="flex flex-col -space-y-1.5">
                      <span className="line-through text-xs">
                        {event.player}
                      </span>
                      <span className="text-gray-800">{event.subIn}</span>
                    </div>
                  ) : (
                    <span>{event.player}</span>
                  )}
                  {getIcon(event.type)}
                </div>
              )}
            </div>
            {/* Center minute */}
            <div className="w-12 text-center text-xs text-gray-600 font-bold">
              {event.minute}'
            </div>
            {/* Right side (Team B) */}
            <div
              className={`flex-1 flex ${
                event.team === "Team B" ? "justify-start" : "justify-end"
              }`}
            >
              {event.team === "Team B" && (
                <div className="flex items-center gap-2">
                  {getIcon(event.type)}
                  {event.type === "sub" ? (
                    <div className="flex flex-col -space-y-1.5">
                      <span className="line-through text-xs">
                        {event.player}
                      </span>
                      <span className="text-gray-800">{event.subIn}</span>
                    </div>
                  ) : (
                    <span>{event.player}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchEvents;
