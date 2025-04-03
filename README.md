# 💬 Chainlit Chat Application

A custom, user-friendly chat interface built on **Chainlit** with multi-language support, theme toggle, and advanced chat features.  
Designed for seamless UX, real-time responses, and clean, accessible UI.

---

## 🧠 Overview

This project is a modern chat interface with:

- 🌐 **Language Switching**  
  Instantly switch between languages with UI updates in real-time. Language preference is saved across sessions.

- 💡 **Streaming Responses**  
  Messages appear word-by-word from the backend for a realistic chat experience.

- ✏️ **Edit & Resend**  
  Modify previously sent messages and resubmit them easily.

- 💬 **Copy & Like Messages**  
  Users can quickly copy text or like messages with visual feedback.

- 🌙 **Theme Toggle**  
  Switch between light and dark modes—your preference is remembered.---

## 🧩 Features

- 🈳 **Multi-language support (i18n)**  
  All labels, messages, and UI elements update dynamically.

- 🌗 **Dark/Light Theme**  
  Fully responsive design that instantly adapts to your selected mode.

- ⚡ **Real-time interaction**  
  Smooth, flicker-free message streaming.

- 🧱 **Modular & Clean Code**  
  Built with reusable React components and best practices.

---

## 🛠 Installation

1. Clone the repository:

```bash
git clone https://github.com/andric-dusica/chainlit-project.git
cd frontend
```

2. Install dependencies:
```bash
npm install
npm install vite --save-dev
npm install i18next react-i18next
```

4. Start the development server:
```bash
npm run dev
```

5. Open in browser:
👉 http://localhost:5173

---

## ⚙️ Build

To generate a production-ready build:

```bash
npm run build
```
The optimized output will be located in the dist/ folder.

---

## 💡 Usage Guide

### 🌐 Switch Language  
Click the language selector in the header to instantly change the interface language. Your preference is saved across sessions.

### 🌙 Toggle Theme  
Use the sun/moon icon to switch between light and dark mode. The app will remember your choice.

### 💬 Chat Features  
- Type your message and hit enter to receive streaming responses.  
- Edit any sent message and resend it.  
- Click the heart to like a message or the copy icon to copy text instantly.

```bash
chainlit-project/
├── frontend/
│   ├── public/                # Static files (images, etc.)
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── i18n/              # Language JSON files
│   │   ├── pages/             # Page components (e.g., Chat)
│   │   ├── App.jsx            # Main React component
│   │   └── main.jsx           # App entry point
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── vite.config.js         # Vite bundler configuration
│   └── index.html             # HTML entry file
```
## 🧠 Tech Stack

🟣 **React** – UI framework  
🧠 **Chainlit** – Backend + chat stream handling  
🌐 **i18next** – Internationalization  
🎨 **Tailwind CSS** – Utility-first styling  
💾 **localStorage** – Stores language & theme preferences  
⚡ **Vite** – Lightning-fast bundler with HMR

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to use, modify, and distribute it for personal or commercial projects.

