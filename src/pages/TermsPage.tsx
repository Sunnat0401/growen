// pages/TermsPage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Language, useTranslation } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText, CheckCircle, AlertCircle } from "lucide-react";

const TermsPage = () => {
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
              {t.footer.modalTitles.terms}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Terms and conditions for using Growen services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="flex items-center gap-3 mb-6 p-4 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Last updated: {new Date().toLocaleDateString()}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t.footer.policies.terms}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Allowed Uses</h4>
                        <p className="text-sm text-muted-foreground">Personal and agricultural disease detection</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Restrictions</h4>
                        <p className="text-sm text-muted-foreground">Commercial use without permission</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Important Notes</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>AI results are for informational purposes only</li>
                      <li>Consult with professionals for critical decisions</li>
                      <li>Service availability may vary</li>
                      <li>We reserve the right to update these terms</li>
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

export default TermsPage;