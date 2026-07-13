import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"), { loading: () => <div className="section-padding" /> });
const TechnicalExpertise = dynamic(() => import("@/components/TechnicalExpertise"), { loading: () => <div className="section-padding" /> });
const NutriScan = dynamic(() => import("@/components/NutriScan"), { loading: () => <div className="section-padding" /> });
const Projects = dynamic(() => import("@/components/Projects"), { loading: () => <div className="section-padding" /> });
const Certifications = dynamic(() => import("@/components/Certifications"), { loading: () => <div className="section-padding" /> });
const Contact = dynamic(() => import("@/components/Contact"), { loading: () => <div className="section-padding" /> });
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"));
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const CommandPalette = dynamic(() => import("@/components/CommandPalette"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <CommandPalette />
      <div className="relative">
        <Hero />
        <About />
        <TechnicalExpertise />
        <NutriScan />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}
