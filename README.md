# React Vite TypeScript Authentication + Dashboard Project

This project is built using React, Vite, and TypeScript.
It includes an authentication system (Login/Register) and a dashboard system using layouts.

---

# Technologies Used

- React
- Vite
- TypeScript
- React Router DOM
- Tailwind CSS
- Material UI (MUI)

---

# Packages Installed

## Install all dependencies
```bash
npm install
```

## Routing
```bash
npm install react-router-dom
```

## Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

## Material UI
```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Material UI Icons
```bash
npm install @mui/icons-material
```

---

# Project Features

## Authentication System
- Login page
- Register page
- Shared AuthLayout
- Navigation between login and register

## Dashboard System
- MainLayout (Dashboard layout with sidebar)
- Dashboard page inside layout
- Logout functionality (basic navigation)
- Scalable structure for future pages

---

# Layout Structure

## AuthLayout
Used for authentication pages:
- Login
- Register

Location:
```
src/layouts/AuthLayout.tsx
```

---

## MainLayout
Used for dashboard system:
- Sidebar navigation
- Main dashboard layout
- Outlet for nested pages

Location:
```
src/layouts/MainLayout.tsx
```

---

# Routing Structure

```tsx
<Route path="/" element={<AuthLayout />}>
  <Route index element={<Navigate to="/login" />} />
  <Route path="login" element={<Login />} />
  <Route path="register" element={<Register />} />
</Route>

<Route path="/dashboard" element={<MainLayout />}>
  <Route index element={<Dashboard />} />
</Route>
```

---

# App Flow

- `/login` → Login page
- `/register` → Register page
- `/dashboard` → Main dashboard (protected layout)

---

# Project Structure

```txt
src/
 ├── layouts/
 │    ├── AuthLayout.tsx
 │    └── MainLayout.tsx
 ├── pages/
 │    ├── Login.tsx
 │    ├── Register.tsx
 │    └── Dashboard.tsx
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

---

# Run the Project

```bash
npm run dev
```

---

# Chat Reference

Project development discussion and setup guide:

https://chatgpt.com/share/69fd8fdb-dcd8-83eb-a0cf-1abb728066dd

---

# Author

Mohamad Jamal