"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { Language } from "@/lib/i18n";
import { Leaf, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

export function Header({ currentLang, onLanguageChange, t }: HeaderProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/#features", label: t.nav.features },
    { href: "/#about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
    { href: "/privacy", label: t.footer.links.privacy },
    { href: "/terms", label: t.footer.links.terms },
    { href: "/support", label: t.footer.links.support },
    { href: "/delete-account", label: t.footer.links.delete },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  // return (
  //   <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
  //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex items-center justify-between h-16 sm:h-20">
  //         {/* Logo */}
  //         <Link
  //           to="/"
  //           className="flex items-center gap-2 sm:gap-3 animate-fade-in"
  //         >
  //           <div className="bg-primary/10 p-2 rounded-xl">
  //             <Leaf className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
  //           </div>
  //           <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
  //             Growen
  //           </span>
  //         </Link>

  //         {/* Desktop navigation */}
  //         <nav className="hidden max-w-[1170px]:flex items-center gap-4 lg:gap-6 animate-fade-in">
  //           {navItems.map((item) =>
  //             item.href.startsWith("/#") ? (
  //               <a
  //                 key={item.href}
  //                 href={item.href}
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   handleNavClick(item.href);
  //                 }}
  //                 className={`text-sm lg:text-base font-medium transition-colors ${
  //                   isActive(item.href)
  //                     ? "text-primary"
  //                     : "text-foreground hover:text-primary"
  //                 }`}
  //               >
  //                 {item.label}
  //               </a>
  //             ) : (
  //               <Link
  //                 key={item.href}
  //                 to={item.href}
  //                 className={`text-sm lg:text-base font-medium transition-colors ${
  //                   isActive(item.href)
  //                     ? "text-primary"
  //                     : "text-foreground hover:text-primary"
  //                 }`}
  //                 onClick={() => setIsMenuOpen(false)}
  //               >
  //                 {item.label}
  //               </Link>
  //             )
  //           )}
  //         </nav>

  //         {/* Right side */}
  //         <div className="flex items-center gap-2 sm:gap-3 animate-fade-in">
  //           <ThemeToggle />
  //           <LanguageSelector
  //             currentLang={currentLang}
  //             onLanguageChange={onLanguageChange}
  //           />

  //           {/* Hamburger button (mobile only) */}
  //           <button
  //             onClick={() => setIsMenuOpen(!isMenuOpen)}
  //             className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
  //             aria-label="Toggle Menu"
  //           >
  //             {isMenuOpen ? (
  //               <X className="h-6 w-6 text-foreground" />
  //             ) : (
  //               <Menu className="h-6 w-6 text-foreground" />
  //             )}
  //           </button>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Mobile Menu */}
  //     <AnimatePresence>
  //       {isMenuOpen && (
  //         <motion.div
  //           initial={{ opacity: 0, y: -15 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           exit={{ opacity: 0, y: -15 }}
  //           transition={{ duration: 0.25 }}
  //           className="md:hidden bg-background border-t border-border shadow-lg"
  //         >
  //           <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
  //             {navItems.map((item) =>
  //               item.href.startsWith("/#") ? (
  //                 <a
  //                   key={item.href}
  //                   href={item.href}
  //                   onClick={(e) => {
  //                     e.preventDefault();
  //                     handleNavClick(item.href);
  //                   }}
  //                   className={`block text-sm py-2 rounded-lg px-2 transition-colors ${
  //                     isActive(item.href)
  //                       ? "bg-primary/10 text-primary font-semibold"
  //                       : "text-foreground hover:bg-muted hover:text-primary"
  //                   }`}
  //                 >
  //                   {item.label}
  //                 </a>
  //               ) : (
  //                 <Link
  //                   key={item.href}
  //                   to={item.href}
  //                   onClick={() => setIsMenuOpen(false)}
  //                   className={`block text-sm py-2 rounded-lg px-2 transition-colors ${
  //                     isActive(item.href)
  //                       ? "bg-primary/10 text-primary font-semibold"
  //                       : "text-foreground hover:bg-muted hover:text-primary"
  //                   }`}
  //                 >
  //                   {item.label}
  //                 </Link>
  //               )
  //             )}
  //           </div>
  //         </motion.div>
  //       )}
  //     </AnimatePresence>
  //   </header>
  // );


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="bg-primary/10 p-2 rounded-xl">
              <Leaf className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Growen
            </span>
          </Link>

          {/* Desktop navigation - 1170px dan katta ekranlarda ko'rinadi */}
          <nav className="hidden xl:flex items-center gap-4 lg:gap-6 animate-fade-in">
            {navItems.map((item) =>
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-sm lg:text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm lg:text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3 animate-fade-in">
            <ThemeToggle />
            <LanguageSelector
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />

            {/* Hamburger button - 1170px dan kichik ekranlarda ko'rinadi */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - 1170px dan kichik ekranlarda ko'rinadi */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="xl:hidden fixed inset-0 bg-black/50 z-40 mt-16"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) =>
                    item.href.startsWith("/#") ? (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-foreground hover:bg-muted hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-foreground hover:bg-muted hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
