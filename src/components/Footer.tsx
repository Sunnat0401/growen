// "use client";

// import { useState } from "react";
// import { Leaf } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// interface FooterProps {
//   t: any;
//   lang: "uz" | "ru" | "en";
// }

// export function Footer({ t, lang }: FooterProps) {
//   const currentYear = new Date().getFullYear();
//   const [openModal, setOpenModal] = useState<string | null>(null);

//   const content = {
//     uz: {
//       privacy: `Biz foydalanuvchilarning maxfiyligini qadrlaymiz. Sizning ma'lumotlaringiz faqat Growen xizmatlarini yaxshilash va ilmiy maqsadlarda ishlatiladi. Uchinchi tomonlarga berilmaydi.`,
//       terms: `Growen xizmatlaridan foydalanish orqali siz bizning qoidalarimizga rozilik bildirasiz. AI natijalari faqat maslahat sifatida taqdim etiladi.`,
//       support: `Savollar uchun biz bilan bog‘laning: \nEmail: support@growen.ai \nTelefon: +998 90 123 45 67`,
//       delete: `Hisobingizni yoki ma'lumotlaringizni o‘chirish uchun iltimos bizga yozing: privacy@growen.ai.`,
//     },
//     ru: {
//       privacy: `Мы ценим конфиденциальность пользователей. Ваша информация используется только для улучшения сервисов Growen и научных целей. Не передаётся третьим лицам.`,
//       terms: `Используя сервис Growen, вы соглашаетесь с нашими условиями. Результаты ИИ предоставляются только в ознакомительных целях.`,
//       support: `Свяжитесь с нами по вопросам: \nEmail: support@growen.ai \nТелефон: +998 90 123 45 67`,
//       delete: `Чтобы удалить свой аккаунт или данные, напишите нам на: privacy@growen.ai.`,
//     },
//     en: {
//       privacy: `We respect your privacy. Your data is used only to improve Growen services and for research purposes. It will never be shared with third parties.`,
//       terms: `By using Growen, you agree to our terms. AI results are for informational purposes only.`,
//       support: `Contact us for questions:\nEmail: support@growen.ai\nPhone: +998 90 123 45 67`,
//       delete: `To delete your account or data, please contact us at: privacy@growen.ai.`,
//     },
//   };

//   const text = content[lang];

//   return (
//     <footer
//       id="contact"
//       className="bg-muted/30 border-t border-border py-8 sm:py-12"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
//             {/* Logo */}
//             <div className="flex items-center gap-2 sm:gap-3">
//               <div className="bg-primary/10 p-2 rounded-xl">
//                 <Leaf className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
//               </div>
//               <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
//                 Growen
//               </span>
//             </div>

//             {/* Description */}
//             <p className="text-sm sm:text-base text-muted-foreground max-w-md">
//               {t.footer.description}
//             </p>

//             {/* Footer Links */}
//             <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-primary mt-4">
//               {[
//                 { key: "privacy", label: "Privacy Policy" },
//                 { key: "terms", label: "Terms of Service" },
//                 { key: "support", label: "Support / Contact" },
//                 { key: "delete", label: "Account / Data Deletion" },
//               ].map((item) => (
//                 <button
//                   key={item.key}
//                   onClick={() => setOpenModal(item.key)}
//                   className="hover:underline focus:outline-none"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>

//             {/* Divider */}
//             <div className="pt-4 sm:pt-6 border-t border-border w-full">
//               <p className="text-xs sm:text-sm text-muted-foreground">
//                 © {currentYear} Growen. {t.footer.rights}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <Dialog open={!!openModal} onOpenChange={() => setOpenModal(null)}>
//         <DialogContent className="max-w-md sm:max-w-lg rounded-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl font-semibold">
//               {openModal === "privacy" && "Privacy Policy / Maxfiylik siyosati"}
//               {openModal === "terms" && "Terms of Service / Foydalanish shartlari"}
//               {openModal === "support" && "Support / Qo‘llab-quvvatlash"}
//               {openModal === "delete" && "Account / Data Deletion"}
//             </DialogTitle>
//           </DialogHeader>
//           <div className="mt-2 whitespace-pre-line text-sm sm:text-base text-muted-foreground">
//             {openModal === "privacy" && text.privacy}
//             {openModal === "terms" && text.terms}
//             {openModal === "support" && text.support}
//             {openModal === "delete" && text.delete}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </footer>
//   );
// }
// components/Footer.tsx (qisman yangilandi)



import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Language, useTranslation } from "@/lib/i18n";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = useTranslation(lang);

  const footerLinks = [
    { key: "privacy", href: "/privacy", label: t.footer.links.privacy },
    { key: "terms", href: "/terms", label: t.footer.links.terms },
    { key: "support", href: "/support", label: t.footer.links.support },
    { key: "delete", href: "/delete-account", label: t.footer.links.delete },
  ] as const;

  return (
    <footer className="bg-muted/30 border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <div className="bg-primary/10 p-2 rounded-xl">
                <Leaf className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Growen
              </span>
            </Link>

            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
              {t.footer.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-primary mt-4">
              {footerLinks.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="hover:underline focus:outline-none"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 sm:pt-6 border-t border-border w-full">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {currentYear} Growen. {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}