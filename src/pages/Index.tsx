import { useState } from "react";
import { Language, useTranslation } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DetectionSection } from "@/components/DetectionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const t = useTranslation(currentLang);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang}
        t={t}
      />
      <Hero t={t} />
      <DetectionSection t={t} />
      <HowItWorks t={t} />
      <Features t={t} />
      <FAQ t={t} />
      <Footer t={t} />
    </div>
  );
};

export default Index;
