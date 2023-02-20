import i18next from 'i18next';
import ptBR from './pt-br.json';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'ptBR',
  fallbackLng: 'ptBR',
  resources: {
    ptBR: {
      translation: ptBR,
    },
  },
});

export default i18next;
