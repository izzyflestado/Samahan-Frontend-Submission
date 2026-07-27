import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntegrationsGrid } from "@/components/IntegrationsGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntegrationsGrid />
      </main>
    </>
  );
}