import { CookieConsent } from "@/features/cookieConsent";
import { ComparisonSection } from "@/widgets/comparisonSection";
import { CtaSection } from "@/widgets/ctaSection";
import { FaqSection } from "@/widgets/faqSection";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { HeroSection } from "@/widgets/heroSection";
import { LogoMarquee } from "@/widgets/logoMarquee";
import { PlatformSection } from "@/widgets/platformSection";
import { RoadmapSection } from "@/widgets/roadmapSection";
import { SecuritySection } from "@/widgets/securitySection";
import { UseCasesSection } from "@/widgets/useCasesSection";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoMarquee />
        <PlatformSection />
        <UseCasesSection />
        <ComparisonSection />
        <SecuritySection />
        <RoadmapSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
