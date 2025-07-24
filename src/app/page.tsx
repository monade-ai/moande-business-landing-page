import MonadeNavbar from "@/components/blocks/navbar/monade-navbar";
import MonadeHero from "@/components/blocks/hero/monade-hero";
import SalesProcessSteps from "@/components/blocks/process/sales-process-steps";
import TestimonialsWithGraphs from "@/components/blocks/testimonials/testimonials-with-graphs";
import TechnologyGrid from "@/components/blocks/tech-showcase/technology-grid";
import FinalCTASection from "@/components/blocks/cta/final-cta-section";
import MonadeFooter from "@/components/blocks/footer/monade-footer";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <MonadeNavbar />
      <main>
        <MonadeHero />
        <SalesProcessSteps />
        <TestimonialsWithGraphs />
        <TechnologyGrid />
        <FinalCTASection />
      </main>
      <MonadeFooter />
    </div>
  );
}