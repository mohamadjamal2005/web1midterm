# React Vite TypeScript Project

This project is built using React with Vite and TypeScript.
The project also uses Tailwind CSS and Material UI for styling and UI components.

---

# Technologies Used

- React
- Vite
- TypeScript
- Tailwind CSS
- Material UI (MUI)

---

# Packages Installed

## Main Packages

```bash
npm install
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

# Project Setup Steps

## 1. Create Vite Project

```bash
npm create vite@latest
```

Choose:
- React
- TypeScript

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 4. Configure Vite

Edit `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

## 5. Configure Tailwind CSS

Edit `src/index.css`

```css
@import "tailwindcss";
```

---

## 6. Install Material UI

```bash
npm install @mui/material @emotion/react @emotion/styled
```

---

## 7. Install Material UI Icons

```bash
npm install @mui/icons-material
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
 ├── services/
 ├── App.tsx
 ├── index.css
 ├── main.tsx
```

---

# Features

- Fast development using Vite
- Strong typing using TypeScript
- Responsive design using Tailwind CSS
- Ready-to-use UI components using Material UI
- Clean project structure

---

# Chat Link

Project development discussion and setup guide:

https://chatgpt.com/share/69fd8fdb-dcd8-83eb-a0cf-1abb728066dd

---

# Author

Mohamad Jamal