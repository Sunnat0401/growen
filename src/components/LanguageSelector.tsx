// import { Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Language } from "@/lib/i18n";

// interface LanguageSelectorProps {
//   currentLang: Language;
//   onLanguageChange: (lang: Language) => void;
// }

// const languages = {
//   en: 'English',
//   ru: 'Русский',
//   uz: "O'zbekcha",
// };

// export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon" className="transition-all duration-300 hover:scale-105">
//           <Globe className="h-5 w-5" />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="animate-scale-in">
//         {Object.entries(languages).map(([code, name]) => (
//           <DropdownMenuItem
//             key={code}
//             onClick={() => onLanguageChange(code as Language)}
//             className={currentLang === code ? 'bg-accent' : ''}
//           >
//             {name}
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }


import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Languages } from "lucide-react";
import { Language } from "@/lib/i18n";

interface LanguageSelectorProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
  { code: 'uz' as Language, name: 'O\'zbek', flag: '🇺🇿' },
];

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag} {currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              onLanguageChange(language.code);
              setOpen(false);
            }}
            className="flex items-center justify-between"
          >
            <span>
              {language.flag} {language.name}
            </span>
            {currentLang === language.code && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}