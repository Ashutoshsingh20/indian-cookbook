import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        title: "Indian Cookbook",
        subtitle: "Explore and Cook Delicious Indian Recipes",
      },
      buttons: {
        toggleTheme: "Toggle Theme",
        submit: "Submit Recipe",
      },
      sections: {
        popular: "Popular Dishes",
        explore: "Explore Categories",
        searchPlaceholder: "Search recipes...",
      },
    },
  },
  hi: {
    translation: {
      header: {
        title: "भारतीय पकाने की विधि",
        subtitle: "स्वादिष्ट भारतीय व्यंजन खोजें और पकाएं",
      },
      buttons: {
        toggleTheme: "थीम बदलें",
        submit: "रेसिपी जमा करें",
      },
      sections: {
        popular: "लोकप्रिय पकवान",
        explore: "श्रेणियों का अन्वेषण करें",
        searchPlaceholder: "व्यंजनों की खोज करें...",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;