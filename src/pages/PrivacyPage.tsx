// pages/PrivacyPage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Language, useTranslation } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react";

const PrivacyPage = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const t = useTranslation(currentLang);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang}
        t={t}
      />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.nav.home}
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              {t.footer.modalTitles.privacy}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how we protect and handle your data
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Data Protection</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <Lock className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Secure Storage</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <Eye className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Transparency</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t.footer.policies.privacy}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Uploaded images for disease detection</li>
                      <li>Contact information when you reach out to us</li>
                      <li>Usage data to improve our services</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>To provide and improve our AI detection services</li>
                      <li>To communicate with you about our services</li>
                      <li>For research and development purposes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer lang={currentLang} />
    </div>
  );
};

export default PrivacyPage;