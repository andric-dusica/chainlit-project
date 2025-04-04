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
            openLogin: "Open Login Modal",
            save: "Save",
            cancel: "Cancel"
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
          },
          input: {
            placeholder: "Type your message here..."
          },
          copy: {
            copied: "Copied!"
          },
          tooltips: {
            like: "Like message",
            unlike: "Unlike message",
            copy: "Copy message",
            edit: "Edit message",
            send: "Send message",
            disabledSend: "Enter a message to send"
          }
        }
      },
      fr: {
        translation: {
          header: {
            title: "Mon Application"
          },
          buttons: {
            openLogin: "Ouvrir le modal de connexion",
            save: "Enregistrer",
            cancel: "Annuler"
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
          },
          input: {
            placeholder: "Tapez votre message ici..."
          },
          copy: {
            copied: "Copié!"
          },
          tooltips: {
            like: "Aimer le message",
            unlike: "Ne plus aimer le message",
            copy: "Copier le message",
            edit: "Modifier le message",
            send: "Envoyer le message",
            disabledSend: "Entrez un message à envoyer"
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
