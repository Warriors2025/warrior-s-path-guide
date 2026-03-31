import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { FacultySection } from "@/components/home/FacultySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <CoursesPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
