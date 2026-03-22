import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("hi")}>हिंदी</button>
    </div>
  );
};

export default LanguageSwitcher;