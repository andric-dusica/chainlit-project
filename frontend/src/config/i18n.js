import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: {
            title: "My Application"
          },
          buttons: {
            openLogin: "Open Login Modal"
          },
          auth: {
            loginTitle: "Login",
            email: "Email",
            password: "Password",
            login: "Login",
            cancel: "Cancel",
            loginSuccess: "Login successful!"
          },
          errors: {
            invalidEmail: "Please enter a valid email address.",
            missingFields: "Please fill out all fields."
          },
          theme: { 
            light: "Light Theme",
            dark: "Dark Theme",
            system: "Follow System"
          }
        }
      },
      fr: {
        translation: {
          header: {
            title: "Mon Application"
          },
          buttons: {
            openLogin: "Ouvrir le modal de connexion"
          },
          auth: {
            loginTitle: "Connexion",
            email: "Email",
            password: "Mot de passe",
            login: "Se connecter",
            cancel: "Annuler",
            loginSuccess: "Connexion réussie!"
          },
          errors: {
            invalidEmail: "Veuillez entrer une adresse e-mail valide.",
            missingFields: "Veuillez remplir tous les champs."
          },
          theme: { 
            light: "Thème Clair",
            dark: "Thème Sombre",
            system: "Suivre Système"
          }
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
