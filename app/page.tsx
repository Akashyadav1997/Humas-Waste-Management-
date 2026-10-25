import { Hero } from "@/components/hero";
import { ProjectFacts } from "@/components/project-facts";
import { MissionPillars } from "@/components/mission-pillars";
import { ProcessFlow } from "@/components/process-flow";
import { ProjectHighlight } from "@/components/project-highlight";
import { PartnerCTA } from "@/components/partner-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectFacts />
      <MissionPillars />
      <ProcessFlow />
      <ProjectHighlight />
      <PartnerCTA />
    </>
  );
}
