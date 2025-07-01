import FixtureCategory from "@/Components/FixtureCategory";
import Hero from "@/Components/Hero";
import LiveCategory from "@/Components/LiveCategory";

export default function Home() {
  return (
    <div className="mx-5">
      <Hero />
      <LiveCategory />
      <FixtureCategory />
    </div>
  );
}
