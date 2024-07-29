import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../public/Locals/uz.json'
import enTranslation from '../public/Locals/en.json'
import ruTranslation from '../public/Locals/ru.json'
const language = localStorage.getItem('i18nextLng') || 'uz'

i18next
.use(Backend)
.use(languageDetector)
.use(initReactI18next)
.init({
    fallbackLng:'uz',
    lng:language,
    debug:'true',
    resources:{
        uz:{translation:uzTranslation},
        en:{translation:enTranslation},
        ru:{translation:ruTranslation}

    },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
      }

})
export default i18next;
