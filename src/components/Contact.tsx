import React, { useState } from "react";
import { translations } from "@/lib/i18n";

// Fill these for Telegram Bot integration (from .env)
const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const validatePhone = (phone: string) => {
  if (!phone) return false;
  const cleaned = phone.replace(/\s+/g, "");
  return /^\+?\d{9,16}$/.test(cleaned);
};

export type Language = 'en' | 'ru' | 'uz';

interface ContactTranslations {
  title: string;
  subtitle: string;
  name: string;
  phone: string;
  message: string;
  send: string;
  sending: string;
  success: string;
  error: string;
  telegramError: string;
}

interface ContactProps {
  lang: Language;
}

// Add these localization keys to translations object in i18n!
const contactTranslations = {
  en: {
    title: "Contact Us",
    subtitle: "Leave your contact info and we‘ll get back to you.",
    name: "Name",
    phone: "Phone",
    message: "Message",
    send: "Send",
    sending: "Sending...",
    success: "Message sent successfully!",
    error: "Please fill in all fields correctly.",
    telegramError: "Failed to send to Telegram.",
  },
  ru: {
    title: "Связаться с нами",
    subtitle: "Оставьте свои контактные данные и мы свяжемся с вами.",
    name: "Имя",
    phone: "Телефон",
    message: "Сообщение",
    send: "Отправить",
    sending: "Отправка...",
    success: "Сообщение успешно отправлено!",
    error: "Пожалуйста, заполните все поля корректно.",
    telegramError: "Не удалось отправить в Telegram.",
  },
  uz: {
    title: "Biz bilan bog‘laning",
    subtitle: "Kontakt ma'lumotingizni qoldiring, tez orada javob beramiz.",
    name: "Ism",
    phone: "Telefon",
    message: "Xabar",
    send: "Yuborish",
    sending: "Yuborilmoqda...",
    success: "Xabar muvaffaqiyatli yuborildi!",
    error: "Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring.",
    telegramError: "Telegramga yuborib bo'lmadi.",
  }
};

const Contact: React.FC<ContactProps> = ({ lang }) => {
  // Translations for contact section
  const translation: ContactTranslations = contactTranslations[lang] || contactTranslations.en;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<null | "success" | "error" | "telegram-error">(null);
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus(null);
  }

  async function sendToTelegram({ name, phone, message }: typeof formData) {
    if (!BOT_TOKEN || !CHAT_ID) throw new Error("BOT_TOKEN or CHAT_ID is not set!");
    const txt = `#Contact\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const resp = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: txt }),
      }
    );
    const json = await resp.json();
    if (!resp.ok || !json.ok) {
      throw new Error(json.description || "Telegram error");
    }
    return json;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name.trim() || !validatePhone(formData.phone) || !formData.message.trim()) {
      setStatus("error");
      return;
    }
    setSending(true);
    try {
      await sendToTelegram(formData);
      setStatus("success");
      setFormData({ name: "", phone: "", message: "" });
    } catch (err) {
      setStatus("telegram-error");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-500px)] flex items-center justify-center bg-[hsl(var(--background))] px-4 py-10 transition-colors">
      <div className="w-full max-w-md rounded-xl shadow-[var(--card-shadow)] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-8"
        style={{ boxShadow: "var(--card-shadow)", transition: "var(--transition-smooth)" }}>
        <h1 className="text-2xl font-bold mb-2 text-[hsl(var(--accent))]">{translation.title}</h1>
        <p className="text-sm mb-6 text-[hsl(var(--muted-foreground))]">{translation.subtitle}</p>
        <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-[hsl(var(--foreground))] font-medium">
              {translation.name}
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={translation.name}
              className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-colors"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm mb-1 text-[hsl(var(--foreground))] font-medium">
              {translation.phone}
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={translation.phone + " (+998901234567)"}
              className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-colors"
              autoComplete="off"
              required
              type="tel"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1 text-[hsl(var(--foreground))] font-medium">
              {translation.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={translation.message}
              className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--input))] min-h-[96px] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold py-2 rounded-lg shadow hover:opacity-90 transition-opacity"
          >
            {sending ? translation.sending : translation.send}
          </button>
        </form>
        {status === "success" && (<p className="mt-6 text-center text-green-600 font-medium">{translation.success}</p>)}
        {status === "error" && (<p className="mt-6 text-center text-[hsl(var(--destructive))]">{translation.error}</p>)}
        {status === "telegram-error" && (<p className="mt-6 text-center text-[hsl(var(--destructive))]">{translation.telegramError}</p>)}
      </div>
    </div>
  );
};

export default Contact;