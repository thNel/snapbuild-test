import { CookieConsent } from "@/features/cookieConsent";
import { CaseStudiesSection } from "@/widgets/caseStudiesSection";
import { ComparisonSection } from "@/widgets/comparisonSection";
import { CtaSection } from "@/widgets/ctaSection";
import { FaqSection } from "@/widgets/faqSection";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { HeroSection } from "@/widgets/heroSection";
import { LogoMarquee } from "@/widgets/logoMarquee";
import { PlatformSection } from "@/widgets/platformSection";
import { QualityControlSection } from "@/widgets/qualityControlSection";
import { RoadmapSection } from "@/widgets/roadmapSection";
import { SecuritySection } from "@/widgets/securitySection";
import { TeamScenariosSection } from "@/widgets/teamScenariosSection";
import { UseCasesSection } from "@/widgets/useCasesSection";
import { WorkflowSection } from "@/widgets/workflowSection";

import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.intro}>
          <HeroSection />
          <LogoMarquee />
        </div>
        <PlatformSection />
        <WorkflowSection />
        <UseCasesSection />
        <TeamScenariosSection />
        <CaseStudiesSection />
        <ComparisonSection />
        <QualityControlSection />
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
