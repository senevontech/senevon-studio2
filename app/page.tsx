import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CTASection } from "@/components/sections/CTASection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { getFeaturedProjectsStatic } from "@/lib/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjectsStatic();

  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
      <HeroSection />
      <IdentitySection />
      <CapabilitiesSection />
      <WorkSection initialItems={featuredProjects} />
      <ProcessSection />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
