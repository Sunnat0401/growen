// import Contact from '@/components/Contact'
// import React, { useState } from 'react'

// import {Language} from '@/lib/i18n'

// const ContactPage = () => {
//     const [currentLang, setCurrentLang] = useState<Language>('en');
//   return (
//     <div>
//       <Contact lang={currentLang}/>
//     </div>
//   )
// }

// export default ContactPage

import { useState } from "react";
import { Link } from "react-router-dom";
import { Language, useTranslation } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const t = useTranslation(currentLang);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert(t.contact.success);
      setFormData({ name: "", phone: "", message: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang}
        t={t}
      />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.nav.home}
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              {t.contact.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? t.contact.sending : t.contact.send}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {currentLang === 'en' && 'Get in Touch'}
                  {currentLang === 'ru' && 'Свяжитесь с нами'}
                  {currentLang === 'uz' && 'Bog\'lanish'}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {currentLang === 'en' && 'Email'}
                        {currentLang === 'ru' && 'Эл. почта'}
                        {currentLang === 'uz' && 'Elektron pochta'}
                      </p>
                      <p className="text-muted-foreground">support@growen.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {currentLang === 'en' && 'Phone'}
                        {currentLang === 'ru' && 'Телефон'}
                        {currentLang === 'uz' && 'Telefon'}
                      </p>
                      <p className="text-muted-foreground">+998 90 123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {currentLang === 'en' && 'Address'}
                        {currentLang === 'ru' && 'Адрес'}
                        {currentLang === 'uz' && 'Manzil'}
                      </p>
                      <p className="text-muted-foreground">
                        {currentLang === 'en' && 'Tashkent, Uzbekistan'}
                        {currentLang === 'ru' && 'Ташкент, Узбекистан'}
                        {currentLang === 'uz' && 'Toshkent, O\'zbekiston'}
                      </p>
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

export default ContactPage;