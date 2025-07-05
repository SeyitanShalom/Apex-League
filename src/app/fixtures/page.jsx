import FixtureSection from "@/Components/FixtureSection";
import { fixtures } from "@/data/fixtures";
import React from "react";
const groupByStatus = (fixtures, status) =>
  fixtures.filter((fixture) => fixture.status === status);

const FixturesPage = () => {
  const liveFixtures = groupByStatus(fixtures, "live");
  const completedFixtures = groupByStatus(fixtures, "completed");
  const upcomingFixtures = groupByStatus(fixtures, "upcoming");

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* <h1 className="text-2xl font-bold mb-6">Fixtures</h1> */}
      <FixtureSection title="Live Matches" fixtures={liveFixtures} />
      <FixtureSection title="Upcoming Matches" fixtures={upcomingFixtures} />
      <FixtureSection title="Completed Matches" fixtures={completedFixtures} />
    </div>
  );
};

export default FixturesPage;
