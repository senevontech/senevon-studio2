import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CTASection } from "@/components/sections/CTASection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { getFeaturedProjects } from "@/lib/data/projects";

export const revalidate = 300;

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
      <HeroSection />
      <IdentitySection />
      <CapabilitiesSection />
      <WorkSection items={featuredProjects} />
      <ProcessSection />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
