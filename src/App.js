import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation(); // Hook for translations

  // Function to switch between English and Swahili
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "sw" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{t("welcome")}</h1>
      <button
        onClick={toggleLanguage}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        {t("languageToggle")}
      </button>
    </div>
  );
};

export default App;
