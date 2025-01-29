import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(LanguageDetector) // Detects user language
    .use(initReactI18next) // Integrates i18n with React
    .init({
        resources: {
            en: {
                translation: {
                    welcome: "Welcome to our website!",
                    languageToggle: "Switch to Swahili"
                }
            },
            sw: {
                translation: {
                    welcome: "Karibu kwenye tovuti yetu!",
                    languageToggle: "Badilisha hadi Kiingereza"
                }
            }
        },
        fallbackLng: "en", // Default language
        detection: { order: ["navigator", "localStorage", "sessionStorage"] },
        interpolation: { escapeValue: false }
    });

export default i18n;
