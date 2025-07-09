import { matches } from "@/data/matches";
import Image from "next/image";
import Link from "next/link";

const groupByDate = (matches) => {
  return matches.reduce((acc, fixture) => {
    acc[fixture.date] = acc[fixture.date] || [];
    acc[fixture.date].push(fixture);
    return acc;
  }, {});
};

const FixtureSection = ({ title, matches }) => {
  const fixturesByDate = groupByDate(matches);
  const sortedDates = Object.keys(fixturesByDate).sort();

  if (matches.length === 0) return null;

  return (
    <div className="mb-10 text-sm">
      <h2 className="text-sm font-semibold py-1 text-white text-center bg-[#B82600]">
        {title}
      </h2>
      {sortedDates.map((date) => (
        <div key={date} className="my-4 px-2">
          <div className="">
            <h3 className="font-semibold">
              {new Date(date).toLocaleDateString()}
            </h3>
          </div>
          <div className="flex flex-col mt-1 gap-4">
            {fixturesByDate[date]
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((fixture) => (
                <Link key={fixture.id} href={`/matches/${fixture.id}`}>
                  <div className="bg-white shadow-sm rounded-lg flex items-center justify-between px-4 py-3 relative">
                    {fixture.status === "live" ? (
                      <div
                        className="bg-green-600 rounded-full w-3 h-3 animate-blink absolute left-4"
                        style={{
                          animation: "blink 2s infinite",
                        }}
                      ></div>
                    ) : (
                      ""
                    )}
                    <div className="flex-1 flex items-center gap-2 justify-end font-semibold">
                      <p>{fixture.home}</p>
                      <Image
                        src={fixture.image}
                        alt={`${fixture.home} Logo`}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    </div>
                    <div className=" mx-4 text-sm text-gray-600">
                      {fixture.score ? (
                        <span
                          className={`font-bold ${
                            fixture.status === "live" ? "text-green-600" : ""
                          }`}
                        >
                          {fixture.score}
                        </span>
                      ) : (
                        fixture.time
                      )}
                    </div>
                    <div className="flex-1 flex items-center gap-2 font-semibold">
                      <Image
                        src={fixture.image}
                        alt={`${fixture.away} Logo`}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <p>{fixture.away}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FixtureSection;
