# Indian Cookbook

A responsive cookbook website highlighting essential Indian recipes across regions, courses, and cooking techniques. Built with React + Vite and optimized for GitHub Pages deployment.

## ✨ Features

- **Recipe explorer** with search + category filters
- **Detailed recipe modal** covering ingredients, steps, nutrition, and chef notes
- **Regional collections** spotlighting themes (coastal, royal, tiffin-ready, etc.)
- **Responsive cards + modals** that adapt gracefully to phones, tablets, and desktops
- **Deployment ready** for GitHub Pages via Vite static build + GitHub Actions workflow

## 🛠️ Tech stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS modules (single global stylesheet)
- GitHub Pages + Actions for CI/CD

## 🚀 Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## 🧱 Project structure

```
src/
  ├─ data/recipes.js      # data source for recipes + collections
  ├─ App.jsx              # layout, filters, modal logic
  ├─ App.css / index.css  # typography + layout
```

## 📦 Production build

```bash
npm run build
npm run preview
```

Static assets will be emitted to `dist/`.

## 🌐 GitHub Pages deployment

1. Update `vite.config.js` `base` if you rename the repository.
2. Commit + push to `main`.
3. The included GitHub Action builds and deploys the site to the `gh-pages` branch.
4. In the repository settings, set **Pages → Build and deployment** to "Deploy from branch" and pick `gh-pages / root`.

## 📄 License

MIT — feel free to adapt and expand with your own recipes, imagery, or CMS hooks.
