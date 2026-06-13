import EducationSection from "../components/about/EducationSection";
import HeroSection from "../components/about/HeroSection";
import ResumeSection from "../components/about/ResumeSection";
import SkillsSection from "../components/about/SkillsSection";
import StatsSection from "../components/about/StatsSection";
import SummarySection from "../components/about/SummarySection";

export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section>
        <HeroSection/>
      </section>

      {/* Stats */}
      <section>
        <StatsSection/>
      </section>

      {/* Summary */}
      <section>
        <SummarySection/>
      </section>

      {/* Skills */}
      <section>
        <SkillsSection/>
      </section>

      {/* Education */}
      <section>
        <EducationSection/>
      </section>

      {/* Certifications */}
      <section>
        <ResumeSection/>
      </section>

    </div>
  );
}