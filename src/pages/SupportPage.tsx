// pages/SupportPage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Language, useTranslation } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Mail, Phone, MessageCircle, Clock } from "lucide-react";

const SupportPage = () => {
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
              {t.footer.modalTitles.support}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help you with any questions or issues
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Email Support</p>
                      <p className="text-sm text-muted-foreground">support@growen.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Phone Support</p>
                      <p className="text-sm text-muted-foreground">+998 90 123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Support Information</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t.footer.policies.support}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold mb-2">How do I upload images?</h4>
                        <p className="text-muted-foreground">Go to the home page and use the upload section to submit your plant or animal images.</p>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold mb-2">What image formats are supported?</h4>
                        <p className="text-muted-foreground">We support JPG, PNG, and WebP formats with maximum file size of 10MB.</p>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold mb-2">Is there a mobile app?</h4>
                        <p className="text-muted-foreground">Currently we're web-based, but mobile apps are coming soon.</p>
                      </div>
                    </div>
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

export default SupportPage;