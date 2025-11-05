import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { Language } from "@/lib/i18n";
import { Leaf } from "lucide-react";

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

export function Header({ currentLang, onLanguageChange, t }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3 animate-fade-in">
            <div className="bg-primary/10 p-2 rounded-xl">
              <Leaf className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Growen
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 animate-fade-in">
            <a href="#home" className="text-sm lg:text-base font-medium hover:text-primary transition-colors">
              {t.nav.home}
            </a>
            <a href="#features" className="text-sm lg:text-base font-medium hover:text-primary transition-colors">
              {t.nav.features}
            </a>
            <a href="#about" className="text-sm lg:text-base font-medium hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-sm lg:text-base font-medium hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 animate-fade-in">
            <ThemeToggle />
            <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </header>
  );
}
