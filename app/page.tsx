import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CTASection } from "@/components/sections/CTASection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface-base text-text-base">
      <SiteHeader />
      <HeroSection />
      <IdentitySection />
      <CapabilitiesSection />
      <WorkSection />
      <ProcessSection />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
