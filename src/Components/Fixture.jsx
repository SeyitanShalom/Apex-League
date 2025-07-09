import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import Image from "next/image";
import { matches } from "@/data/matches";
import Link from "next/link";

const fixtures = matches.filter((f) => f.status === "upcoming");

const Fixture = () => {
  return (
    <>
      {fixtures.map((fixture) => (
        <Link key={fixture.id} href={`/matches/${fixture.id}`}>
          <div className="rounded-xl py-4 px-2 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex justify-center items-center rounded-full">
                  <Image
                    src={fixture.image}
                    alt={`${fixture.home} Logo`}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-sm font-semibold">{fixture.home}</h3>
              </div>
              <h2 className="text-xl font-semibold">VS</h2>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex justify-center items-center rounded-full">
                  <Image
                    src={fixture.image}
                    alt={`${fixture.away} Logo`}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-sm font-semibold">{fixture.away}</h3>
              </div>
            </div>
            <div className="flex items-center">
              <ImLocation2 className="flex items-center text-xl -translate-x-[2px]" />
              <p className="text-xs">Oyemekun Grammar School Akure</p>
            </div>
            <div className="flex items-center space-x-1">
              <RiCalendarScheduleLine />
              <p className="text-xs">09-07-2025 | 4:00pm</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Fixture;
