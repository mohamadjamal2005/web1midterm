# React Vite TypeScript Project

This project is built using React with Vite and TypeScript.
It includes Tailwind CSS, Material UI, and an authentication layout system.

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

## Main Setup

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
- Ready-made components with Material UI
- Multi-page routing using React Router
- Authentication layout system (AuthLayout)

---

# Authentication Layout (AuthLayout)

The project includes a reusable authentication layout that wraps all auth-related pages such as:

- Login Page
- Register Page
- Forgot Password Page

### Features:

- Centered form design
- Responsive layout
- Clean card UI
- Uses React Router `<Outlet />` for nested routes

### File Location:

```
src/layouts/AuthLayout.tsx
```

---

# Example Routes Structure

```tsx
<Route path="/" element={<AuthLayout />}>
  <Route path="login" element={<Login />} />
  <Route path="register" element={<Register />} />
</Route>
```

---

# Run the Project

```bash
npm run dev
```

---

# Project Structure

```txt
src/
 ├── components/
 ├── layouts/
 │    └── AuthLayout.tsx
 ├── login_page/
 │    └── Login.tsx
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

---

# Chat Reference

Project development discussion and setup guide:

https://chatgpt.com/share/69fd8fdb-dcd8-83eb-a0cf-1abb728066dd

---

# Author

Mohamad Jamal