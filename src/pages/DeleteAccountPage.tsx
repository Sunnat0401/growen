// pages/DeleteAccountPage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Language, useTranslation } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Trash2, AlertTriangle } from "lucide-react";

const DeleteAccountPage = () => {
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
              {t.footer.modalTitles.delete}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Manage your account and data deletion requests
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="flex items-center gap-3 mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  <span className="font-semibold">Important: This action cannot be undone</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Data Deletion Request</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t.footer.policies.delete}
                    </p>
                  </div>

                  <div className="p-6 border border-border rounded-lg bg-muted/30">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Trash2 className="h-5 w-5" />
                      Request Data Deletion
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      To request deletion of your account and all associated data, please send an email to:
                    </p>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="font-mono text-lg text-primary">privacy@growen.ai</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 text-center">
                      Include your registered email address in the request
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">What gets deleted?</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Your account information</li>
                      <li>Uploaded images and analysis results</li>
                      <li>Contact information and messages</li>
                      <li>All personal data associated with your account</li>
                    </ul>
                  </div>

                  <div className="p-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Please Note</h4>
                    <p className="text-sm text-red-600 dark:text-red-300">
                      Once deleted, your data cannot be recovered. This action is permanent and irreversible.
                    </p>
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

export default DeleteAccountPage;