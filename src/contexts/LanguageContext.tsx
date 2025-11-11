"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/i18n';

interface LanguageContextType {
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // LocalStorage dan tilni o'qiymiz yoki default ingliz tilini o'rnatamiz
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('growen-language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  // Til o'zgarganda LocalStorage ga saqlaymiz
  useEffect(() => {
    localStorage.setItem('growen-language', currentLang);
  }, [currentLang]);

  const value = {
    currentLang,
    setCurrentLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}