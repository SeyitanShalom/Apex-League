import { fixtures } from "@/data/fixtures";

const groupByDate = (fixtures) => {
  return fixtures.reduce((acc, fixture) => {
    acc[fixture.date] = acc[fixture.date] || [];
    acc[fixture.date].push(fixture);
    return acc;
  }, {});
};

const FixtureSection = ({ title, fixtures }) => {
  const fixturesByDate = groupByDate(fixtures);
  const sortedDates = Object.keys(fixturesByDate).sort();

  if (fixtures.length === 0) return null;

  return (
    <div className="mb-10 text-sm">
      <h2 className="text-sm font-semibold py-1 text-white text-center bg-[#B82600]">
        {title}
      </h2>
      {sortedDates.map((date) => (
        <div key={date} className="my-5 px-2">
          <div className="">
            <h3 className="font-semibold">
              {new Date(date).toLocaleDateString()}
            </h3>
          </div>
          <div className="flex flex-col mt-1">
            {fixturesByDate[date]
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((fixture) => (
                <div
                  key={fixture.id}
                  className="bg-white shadow-md rounded-lg flex items-center justify-between px-4 py-3"
                >
                  {fixture.status === "live" ? (
                    <div
                      className="bg-green-600 rounded-full w-3 h-3 animate-blink"
                      style={{
                        animation: "blink 2s infinite",
                      }}
                    ></div>
                  ) : (
                    <div className="bg-white rounded-full w-5 h-3 animate-blink"></div>
                  )}
                  <div className="flex-1 text-right font-semibold">
                    {fixture.home}
                  </div>
                  <div className="mx-3 text-gray-400 font-bold">vs</div>
                  <div className="flex-1 font-semibold">{fixture.away}</div>

                  <div className="ml-4 text-sm text-gray-600">
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
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FixtureSection;
