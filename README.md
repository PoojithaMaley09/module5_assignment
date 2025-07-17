# LMS Authentication System

A simple and responsive **Login/Register** interface built with:

- React + TypeScript  
- Tailwind CSS  
- React Hook Form  
- React Router DOM  
- Axios (for API calls)  
- Vite (for development)  

---

##  Project Structure

```
your-repo-name/
│
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── api/
│   │   │   └── auth.ts
│   │   ├── components/
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   └── vite.config.ts          👈 ✅ newly added
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── User_models.ts
│   │   ├── routes/
│   │   │   └── authRoutes.ts
│   │   └── server.ts
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
└── README.md
```

---

##  Getting Started

### 1. Clone the repo

```
cd lms-auth-system/client
```

### 2. Install dependencies

```
npm install
```

### 3. Run the project

```
npm run dev
```

 Open browser:  
 `http://localhost:5173`

---

##  Features

-  Login & Register forms with validation  
- Email format check using regex  
-  Inline error messages on invalid input  
-  Beautiful Tailwind CSS UI  
-  Page routing using React Router  
-  Clean modular structure  

---

##  Dependencies

- `react`  
- `react-router-dom`  
- `react-hook-form`  
- `axios`  
- `tailwindcss`  
- `vite`  
- `typescript`  

---

##  Screenshots

###  Register Page

![Screenshot 2025-07-04 171832.png]

###  Login Page

![Screenshot 2025-07-04 171913.png] 

> 💡 _You can take your own screenshots and place them inside a `/screenshots` folder._

---

## 🛠️ Customization

You can enhance the project by:

- 🔐 Integrating real backend authentication (JWT / Sessions)  
- 🔑 Adding strong password & confirm password fields  
- 🌈 Improving UI with animations or component libraries  
- 📫 Adding Forgot Password / Email Verification flow  

---
