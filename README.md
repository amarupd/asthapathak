# Astha Pathak — Personal Portfolio (React + Vite + Tailwind)

This repository is a ready-to-run React + Vite starter for a colorful personal portfolio website.

## What's included
- Vite + React scaffold (minimal)
- Tailwind CSS configuration
- A single-page app with an enhanced, modern UI component (Hero, Experience, Skills, Projects, Contact)
- `public/Astha_HR_BP.pdf` (your uploaded resume) included
- Dark / Light toggle and responsive layout

## Quick start (requires node >=16)
```bash
# 1. extract or clone repository
cd astha-portfolio

# 2. install
npm install

# 3. run dev server
npm run dev

# open http://localhost:5173
```

## Build for production
```bash
npm run build
npm run preview
```

## Notes
- Tailwind is already configured. Run `npx tailwindcss -i ./src/index.css -o ./dist/assets/index.css --watch` if you want to process Tailwind separately, but Vite + PostCSS will handle it via the installed devDependencies.
- Replace social links and resume path in `src/App.jsx` as needed.
