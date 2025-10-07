import React, { createContext, useContext, useState } from "react";

type Language = "ru" | "uz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Header
    phone: "+998 99 123 45 67",
    switchTheme: "Переключить тему",
    
    // Navigation
    catalog: "Каталог",
    about: "О нас",
    contacts: "Контакты",
    
    // Catalog
    catalogTitle: "Каталог автомобилей",
    allCars: "Все автомобили",
    filterByBrand: "Фильтр по марке",
    filterByPrice: "Фильтр по цене",
    filterByYear: "Фильтр по году",
    resetFilters: "Сбросить фильтры",
    sortBy: "Сортировать",
    sortByPriceAsc: "По цене (возрастание)",
    sortByPriceDesc: "По цене (убывание)",
    sortByYearDesc: "По году (новые)",
    sortByYearAsc: "По году (старые)",
    
    // Car Card
    from: "от",
    year: "Год",
    mileage: "Пробег",
    transmission: "КПП",
    fuel: "Топливо",
    call: "Позвонить",
    requestCall: "Оставить заявку",
    viewDetails: "Подробнее",
    
    // Car Details
    characteristics: "Характеристики",
    description: "Описание",
    engine: "Двигатель",
    power: "Мощность",
    color: "Цвет",
    bodyType: "Тип кузова",
    drive: "Привод",
    requestForm: "Форма заявки",
    
    // Form
    name: "Ваше имя",
    phoneNumber: "Номер телефона",
    comment: "Комментарий",
    send: "Отправить",
    requestSent: "Заявка отправлена",
    requestSuccess: "Мы свяжемся с вами в ближайшее время",
    
    // Categories
    sedan: "Седан",
    suv: "Внедорожник",
    crossover: "Кроссовер",
    hatchback: "Хэтчбек",
    
    // Transmission
    automatic: "Автомат",
    manual: "Механика",
    
    // Fuel
    gasoline: "Бензин",
    diesel: "Дизель",
    hybrid: "Гибрид",
    electric: "Электро",
    
    // Colors
    black: "Черный",
    white: "Белый",
    silver: "Серебристый",
    red: "Красный",
    blue: "Синий",
    
    // Drive
    fwd: "Передний",
    rwd: "Задний",
    awd: "Полный",
  },
  uz: {
    // Header
    phone: "+998 99 123 45 67",
    switchTheme: "Mavzuni o'zgartirish",
    
    // Navigation
    catalog: "Katalog",
    about: "Biz haqimizda",
    contacts: "Aloqa",
    
    // Catalog
    catalogTitle: "Avtomobillar katalogi",
    allCars: "Barcha avtomobillar",
    filterByBrand: "Marka bo'yicha filtr",
    filterByPrice: "Narx bo'yicha filtr",
    filterByYear: "Yil bo'yicha filtr",
    resetFilters: "Filtrlarni tozalash",
    sortBy: "Saralash",
    sortByPriceAsc: "Narx bo'yicha (o'sish)",
    sortByPriceDesc: "Narx bo'yicha (kamayish)",
    sortByYearDesc: "Yil bo'yicha (yangi)",
    sortByYearAsc: "Yil bo'yicha (eski)",
    
    // Car Card
    from: "dan",
    year: "Yili",
    mileage: "Bosib o'tgan",
    transmission: "Uzatish qutisi",
    fuel: "Yoqilg'i",
    call: "Qo'ng'iroq qilish",
    requestCall: "So'rov qoldirish",
    viewDetails: "Batafsil",
    
    // Car Details
    characteristics: "Xususiyatlari",
    description: "Tavsif",
    engine: "Dvigatel",
    power: "Quvvat",
    color: "Rang",
    bodyType: "Kuzov turi",
    drive: "Yurish",
    requestForm: "So'rov shakli",
    
    // Form
    name: "Ismingiz",
    phoneNumber: "Telefon raqami",
    comment: "Izoh",
    send: "Yuborish",
    requestSent: "So'rov yuborildi",
    requestSuccess: "Tez orada siz bilan bog'lanamiz",
    
    // Categories
    sedan: "Sedan",
    suv: "Krossover",
    crossover: "Krossover",
    hatchback: "Xetchbek",
    
    // Transmission
    automatic: "Avtomat",
    manual: "Mexanika",
    
    // Fuel
    gasoline: "Benzin",
    diesel: "Dizel",
    hybrid: "Gibrid",
    electric: "Elektr",
    
    // Colors
    black: "Qora",
    white: "Oq",
    silver: "Kumush",
    red: "Qizil",
    blue: "Ko'k",
    
    // Drive
    fwd: "Old",
    rwd: "Orqa",
    awd: "To'liq",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
