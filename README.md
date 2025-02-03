Chainlit Chat Application

Installation

Clone the repository:
git clone https://github.com/andric-dusica/chainlit-project.git

cd frontend 

Install dependencies: 

npm install 

npm install vite --save-dev

npm install i18next react-i18next


Run the development server:

npm run dev

Open your browser: Visit http://localhost:5173/ to see the application in action.

Overview
This project is a custom chat interface built on the Chainlit framework. It features multi-language support, theme toggling, and user-friendly chat functionalities like message editing, streaming responses, and more. The goal is to deliver a seamless, accessible, and visually consistent chat experience.

Features
Language Switcher

- A dropdown button in the header allows users to switch between multiple languages.
- The selected language persists across page reloads, dynamically updating all UI text in real-time.

Custom Chat Interface
- Streaming Responses: Messages from the backend are displayed word-by-word as they arrive.
- Edit & Resend: Users can modify sent messages and resubmit them.
- Copy & Like Messages: Users can copy text and “like” messages with immediate visual feedback.

Theme Toggle
- A simple button lets users switch between light and dark modes.
- The entire interface adapts to the selected theme instantly, without delays or inconsistencies.

Localization Compliance
- All UI text—including buttons, labels, and error messages—is sourced from language files, ensuring seamless localization and ease of translation.


Technical Highlights
Language System
- Built-in support for i18n ensures all text reflects the current language setting.
- Persistent language preference stored in localStorage.

Performance & User Experience
- Instantaneous updates when switching languages or themes.
- No flickering or lag during streaming responses.

Modern Code Practices
- Clean React component structure.
- Modular and reusable logic, making it easy to extend or adjust the UI.
- Adherence to best practices for readability and maintainability.

Getting Started
Prerequisites
- Node.js: Make sure you have Node.js 16+ installed.
- npm or yarn: Either package manager can be used for dependency management.

Usage
1. Switch Languages:
Click on the language button in the header and select a language to instantly update all UI text.

2. Toggle Theme:
Use the theme toggle button to switch between light and dark modes.

3. Chat:
Type messages and send them. The chat will display streaming responses.
Edit and resend messages using the provided edit button.
Copy or like messages with a single click.

Technical Stack
- React: Core framework for building the UI.
- Chainlit: Provides underlying chat and language features.
- i18n: Handles language translations and localization.
- Tailwind CSS: Offers rapid styling and consistent design.
- LocalStorage: Stores language and theme preferences for persistence.

This README covers the essential information for understanding, running, and extending the project. It’s designed to be straightforward, making it easy for developers to jump into the codebase, understand the structure, and start contributing.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
