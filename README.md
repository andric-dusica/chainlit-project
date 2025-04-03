# 💬 Chainlit Chat Application

A custom, user-friendly chat interface built on **Chainlit** with multi-language support, theme toggle, and advanced chat features. Designed for seamless UX, real-time responses, and clean, accessible UI.

---

## 🔧 Installation

1. Clone the repository:
   
git clone https://github.com/andric-dusica/chainlit-project.git

cd frontend

Install dependencies: 

npm install

npm install vite --save-dev

npm install i18next react-i18next


Start the development server:

npm run dev

Open in browser:

👉 http://localhost:5173

##⚙️ Build

To generate a production-ready build:

npm run build

##🌍 Tech Stack

⚛️ React – UI framework

🧠 Chainlit – Backend + chat stream handling

🌐 i18next – Internationalization

🎨 Tailwind CSS – Fast, utility-first styling

💾 localStorage – Stores language & theme preferences

⚡ Vite – Lightning-fast bundler with HMR

##💡 Usage Guide

🌐 Switch Language

Click the language selector in the header.

🌙 Toggle Theme

Use the moon/sun button to switch between dark and light mode.

💬 Chat

Type your message, stream responses, edit & resend, copy, and like messages with one click.

##📁 Project Structure
```
chainlit-project/
├── frontend/
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── i18n/              # Language JSON files
│   │   ├── pages/             # App pages (e.g., Chat)
│   │   ├── App.jsx            # Main React component
│   │   ├── main.jsx           # React root entry
│   ├── tailwind.config.js     # Tailwind CSS config
│   ├── vite.config.js         # Vite bundler config
│   └── index.html             # App HTML entry
└── ...
```

##📄 License

MIT – feel free to use and build on it!
