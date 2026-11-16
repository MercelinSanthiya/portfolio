# Mercelin Santhiya - Portfolio

React + Vite portfolio with an EmailJS contact form.

## Run locally
```bash
npm install
npm run dev
```

## Files you edit
- `src/App.jsx`  : all text, skills, projects, EmailJS keys, LinkedIn link
- `src/assets/pic.png`  : your photo
- `src/assets/Mercelin Santhiya.pdf`  : your resume (the import in App.jsx must match this name exactly)

## Deploy to GitHub Pages (automatic)
1. Create a new PUBLIC repository on GitHub (for example `mercelin-portfolio`).
2. In this folder run:
```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mercelin-portfolio.git
git push -u origin main
```
3. On GitHub open **Settings -> Pages**. Under **Source** choose **GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to turn green (1-3 minutes).
5. Your link: `https://YOUR-USERNAME.github.io/mercelin-portfolio/`

## Update the site later
```bash
git add .
git commit -m "Update"
git push
```
It redeploys by itself after each push.

## After it is live
In EmailJS go to **Account -> Security** and add `YOUR-USERNAME.github.io` as an allowed domain, then send a test message from the live site.
