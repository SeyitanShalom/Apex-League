import React from "react";
import { FaFutbol, FaArrowRight, FaExchangeAlt } from "react-icons/fa";
import { IoMdCard } from "react-icons/io";
import { events } from "@/data/events";
import { useParams } from "next/navigation";

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
  const { slug } = useParams();
  const matchEvents = events.filter((event) => String(event.matchId) === slug);
  return (
    <div className="text-md font-medium text-gray-800 p-5">
      <div className="flex flex-col gap-4">
        {matchEvents.length === 0 ? (
          <h2 className="text-center my-20">No events for this match.</h2>
        ) : (
          matchEvents.map((event, idx) => (
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
                        <span className="text-gray-500 text-xs">
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
                        <span className="text-gray-500 text-xs">
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
          ))
        )}
      </div>
    </div>
  );
};

export default MatchEvents;
