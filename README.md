# React Vite TypeScript Authentication + Dashboard Project

This project is built using React, Vite, and TypeScript.
It includes an authentication system and a full dashboard with sidebar navigation pages.

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
- MainLayout with sidebar navigation
- Dashboard home page
- Users page
- Settings page
- Profile page
- Logout functionality (basic navigation)

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

## MainLayout (Dashboard Layout)
Used for the main application after login:
- Sidebar navigation
- Outlet for nested pages
- Dashboard system structure

Location:
```
src/layouts/MainLayout.tsx
```

---

# Pages

## Authentication Pages
- Login → `/login`
- Register → `/register`

## Dashboard Pages
- Dashboard → `/dashboard`
- Users → `/dashboard/users`
- Settings → `/dashboard/settings`
- Profile → `/dashboard/profile`

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
  <Route path="users" element={<Users />} />
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<Profile />} />
</Route>
```

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
 │    ├── Dashboard.tsx
 │    ├── Users.tsx
 │    ├── Settings.tsx
 │    └── Profile.tsx
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

---

# App Flow

1. User opens app → redirected to `/login`
2. Login → redirected to `/dashboard`
3. Sidebar navigation:
   - Users
   - Settings
   - Profile
4. Logout → back to login

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