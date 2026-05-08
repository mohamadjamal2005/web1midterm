# React Vite TypeScript Authentication Project

This project is a simple authentication UI built using React, Vite, and TypeScript.
It includes Login and Register pages with routing and a shared AuthLayout.

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

- Fast development using Vite
- Strong typing with TypeScript
- Responsive UI using Tailwind CSS
- Material UI components support
- React Router navigation
- Authentication layout (AuthLayout)
- Login page
- Register page
- Navigation between Login and Register

---

# Authentication System

## Pages Included

- Login Page → `/login`
- Register Page → `/register`

Both pages are wrapped inside a shared layout:

```
AuthLayout
```

---

# AuthLayout

A reusable layout used for authentication pages.

### Features:
- Centered form design
- Card UI
- Responsive layout
- Uses React Router `<Outlet />`

### Location:
```txt
src/layouts/AuthLayout.tsx
```

---

# Routing Structure

```tsx
<Route path="/" element={<AuthLayout />}>

  <Route index element={<Navigate to="/login" />} />

  <Route path="login" element={<Login />} />
  <Route path="register" element={<Register />} />

</Route>
```

---

# Navigation Flow

- Login page → link to Register
- Register page → link to Login
- Default route redirects to Login

---

# Run the Project

```bash
npm run dev
```

---

# Project Structure

```txt
src/
 ├── layouts/
 │    └── AuthLayout.tsx
 ├── pages/
 │    ├── Login.tsx
 │    └── Register.tsx
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

---

# Chat Reference

Project setup discussion:

https://chatgpt.com/share/69fd8fdb-dcd8-83eb-a0cf-1abb728066dd

---

# Author

Mohamad Jamal