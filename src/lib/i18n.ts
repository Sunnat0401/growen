export type Language = 'en' | 'ru' | 'uz';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      contact: 'Contact',
    },
    hero: {
      title: 'Growen',
      subtitle: 'Disease Discovery Tool',
      description: 'Advanced AI-powered platform for detecting and diagnosing plant and animal diseases with precision and speed',
      cta: 'Get Started',
      learnMore: 'Learn More',
    },
    detection: {
      title: 'What would you like to detect?',
      plant: {
        title: 'Plant Disease',
        description: 'Upload an image of your plant to detect diseases',
        button: 'Detect Plant Disease',
      },
      animal: {
        title: 'Animal Disease',
        description: 'Upload an image of your animal to detect diseases',
        button: 'Detect Animal Disease',
      },
    },
    howItWorks: {
      title: 'How it works',
      step1: {
        title: 'Upload Image',
        description: 'Take or upload a clear photo of the affected plant or animal',
      },
      step2: {
        title: 'AI Analysis',
        description: 'Our advanced AI analyzes the image for disease patterns',
      },
      step3: {
        title: 'Get Results',
        description: 'Receive detailed diagnosis and treatment recommendations',
      },
    },
    features: {
      title: 'Why choose Growen?',
      accuracy: {
        title: 'High Accuracy',
        description: 'Our AI model is trained on millions of images for precise detection',
      },
      speed: {
        title: 'Fast Results',
        description: 'Get instant analysis and recommendations in seconds',
      },
      comprehensive: {
        title: 'Comprehensive Database',
        description: 'Access to extensive disease database for plants and animals',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: {
        question: 'How accurate is the disease detection?',
        answer: 'Our AI model achieves over 95% accuracy in detecting common plant and animal diseases, continuously improving through machine learning.',
      },
      q2: {
        question: 'What types of diseases can be detected?',
        answer: 'We can detect a wide range of diseases including fungal infections, bacterial diseases, viral infections, and nutrient deficiencies in plants and common diseases in livestock and pets.',
      },
      q3: {
        question: 'Is my data secure?',
        answer: 'Yes, all uploaded images and data are encrypted and securely stored. We respect your privacy and never share your information with third parties.',
      },
    },
    footer: {
      description: 'Advanced AI-powered platform for agricultural disease detection',
      rights: 'All rights reserved.',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      features: 'Возможности',
      contact: 'Контакты',
    },
    hero: {
      title: 'Growen',
      subtitle: 'Инструмент обнаружения болезней',
      description: 'Продвинутая платформа с искусственным интеллектом для точного и быстрого обнаружения и диагностики болезней растений и животных',
      cta: 'Начать',
      learnMore: 'Узнать больше',
    },
    detection: {
      title: 'Что вы хотите проверить?',
      plant: {
        title: 'Болезни растений',
        description: 'Загрузите изображение растения для обнаружения болезней',
        button: 'Определить болезнь растения',
      },
      animal: {
        title: 'Болезни животных',
        description: 'Загрузите изображение животного для обнаружения болезней',
        button: 'Определить болезнь животного',
      },
    },
    howItWorks: {
      title: 'Как это работает',
      step1: {
        title: 'Загрузите фото',
        description: 'Сделайте или загрузите четкое фото пораженного растения или животного',
      },
      step2: {
        title: 'Анализ ИИ',
        description: 'Наш продвинутый ИИ анализирует изображение на предмет признаков болезни',
      },
      step3: {
        title: 'Получите результаты',
        description: 'Получите подробный диагноз и рекомендации по лечению',
      },
    },
    features: {
      title: 'Почему выбирают Growen?',
      accuracy: {
        title: 'Высокая точность',
        description: 'Наша модель ИИ обучена на миллионах изображений для точного обнаружения',
      },
      speed: {
        title: 'Быстрые результаты',
        description: 'Мгновенный анализ и рекомендации за считанные секунды',
      },
      comprehensive: {
        title: 'Обширная база данных',
        description: 'Доступ к обширной базе данных болезней растений и животных',
      },
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      q1: {
        question: 'Насколько точно обнаружение болезней?',
        answer: 'Наша модель ИИ достигает точности более 95% в обнаружении распространенных болезней растений и животных, постоянно улучшаясь благодаря машинному обучению.',
      },
      q2: {
        question: 'Какие типы болезней можно обнаружить?',
        answer: 'Мы можем обнаружить широкий спектр заболеваний, включая грибковые инфекции, бактериальные болезни, вирусные инфекции и дефицит питательных веществ у растений, а также распространенные болезни у скота и домашних животных.',
      },
      q3: {
        question: 'Безопасны ли мои данные?',
        answer: 'Да, все загруженные изображения и данные зашифрованы и надежно хранятся. Мы уважаем вашу конфиденциальность и никогда не передаем вашу информацию третьим лицам.',
      },
    },
    footer: {
      description: 'Продвинутая платформа на базе ИИ для обнаружения сельскохозяйственных болезней',
      rights: 'Все права защищены.',
    },
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Biz haqimizda',
      features: 'Imkoniyatlar',
      contact: 'Aloqa',
    },
    hero: {
      title: 'Growen',
      subtitle: 'Kasalliklarni aniqlash vositasi',
      description: "O'simliklar va hayvonlar kasalliklarini aniq va tez aniqlash va tashxis qilish uchun sun'iy intellekt asosidagi ilg'or platforma",
      cta: 'Boshlash',
      learnMore: "Ko'proq o'rganish",
    },
    detection: {
      title: 'Nimani tekshirmoqchisiz?',
      plant: {
        title: "O'simlik kasalliklari",
        description: "Kasalliklarni aniqlash uchun o'simlik rasmini yuklang",
        button: "O'simlik kasalligini aniqlash",
      },
      animal: {
        title: 'Hayvon kasalliklari',
        description: 'Kasalliklarni aniqlash uchun hayvon rasmini yuklang',
        button: 'Hayvon kasalligini aniqlash',
      },
    },
    howItWorks: {
      title: 'Qanday ishlaydi',
      step1: {
        title: 'Rasm yuklang',
        description: "Zararlangan o'simlik yoki hayvonning aniq rasmini oling yoki yuklang",
      },
      step2: {
        title: 'AI tahlili',
        description: "Bizning ilg'or sun'iy intellektimiz kasallik belgilari uchun rasmni tahlil qiladi",
      },
      step3: {
        title: 'Natijalarni oling',
        description: 'Batafsil tashxis va davolash bo\'yicha tavsiyalar oling',
      },
    },
    features: {
      title: 'Nega Growen-ni tanlash kerak?',
      accuracy: {
        title: 'Yuqori aniqlik',
        description: 'Bizning AI modelimiz aniq aniqlash uchun millionlab tasvirlar asosida o\'rgatilgan',
      },
      speed: {
        title: 'Tez natijalar',
        description: 'Bir necha soniyada oniy tahlil va tavsiyalar oling',
      },
      comprehensive: {
        title: 'Keng qamrovli ma\'lumotlar bazasi',
        description: "O'simliklar va hayvonlar kasalliklari bo'yicha keng qamrovli ma'lumotlar bazasiga kirish",
      },
    },
    faq: {
      title: "Tez-tez so'raladigan savollar",
      q1: {
        question: 'Kasalliklarni aniqlash qanchalik aniq?',
        answer: "Bizning AI modelimiz umumiy o'simliklar va hayvonlar kasalliklarini aniqlashda 95% dan ortiq aniqlikka erishadi va mashinali o'rganish orqali doimiy ravishda yaxshilanadi.",
      },
      q2: {
        question: 'Qanday turdagi kasalliklarni aniqlash mumkin?',
        answer: "Biz qo'ziqorin infektsiyalari, bakterial kasalliklar, virusli infektsiyalar va o'simliklarning ozuqa moddalar tanqisligi hamda chorva mollari va uy hayvonlaridagi keng tarqalgan kasalliklarni aniqlashimiz mumkin.",
      },
      q3: {
        question: "Ma'lumotlarim xavfsizmi?",
        answer: "Ha, barcha yuklangan rasmlar va ma'lumotlar shifrlangan va xavfsiz saqlanadi. Biz sizning maxfiyligingizni hurmat qilamiz va hech qachon ma'lumotlaringizni uchinchi shaxslarga bermаymiz.",
      },
    },
    footer: {
      description: "Qishloq xo'jaligi kasalliklarini aniqlash uchun sun'iy intellekt asosidagi ilg'or platforma",
      rights: 'Barcha huquqlar himoyalangan.',
    },
  },
};

export function useTranslation(lang: Language) {
  return translations[lang];
}
