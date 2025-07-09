import FixtureSection from "@/Components/FixtureSection";
import { matches } from "@/data/matches";
import React from "react";
const groupByStatus = (matches, status) =>
  matches.filter((fixture) => fixture.status === status);

const FixturesPage = () => {
  const liveMatches = groupByStatus(matches, "live");
  const completedMatches = groupByStatus(matches, "completed");
  const upcomingMatches = groupByStatus(matches, "upcoming");

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* <h1 className="text-2xl font-bold mb-6">Fixtures</h1> */}
      <FixtureSection title="Completed Matches" matches={completedMatches} />
      <FixtureSection title="Live Matches" matches={liveMatches} />
      <FixtureSection title="Upcoming Matches" matches={upcomingMatches} />
    </div>
  );
};

export default FixturesPage;
