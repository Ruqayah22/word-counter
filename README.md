# Word Counter Project 

I take the idea of this project from those two projects:
- [first one](https://wordcount.com/)
- [second one](https://charactercalculator.com/ar/)

## Used In It 
- React js.
- MUI (Material UI).
- i18next.

### What is the new in it 

used the english and arabic language inside it together.

----
### Deployed It 
in github pages (used it for the first time).

------
### The Steps to Deployed it To Github pages:

1. install the package: 
``` 
npm install gh-pages --save-dev 
or 
npm install gh-pages --save-dev --legacy-peer-deps
or 
npm install gh-pages --save-dev --force

```
2. Add homepage in package.json
` "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME" `

3. Add Deployment Scripts 
> (Inside package.json, find "scripts" and add these two scripts:)

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build" 
```
be like:
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

```
4. Push Your Code to GitHub 
- if you don't have a GitHub repository do this:
```
git init
git add .
git commit -m "Initial commit"
git branch -M master
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git push -u origin master

```
if already have do this:
```
git add .
git commit -m "Your Commit"
git push origin master
```
5. Deploy to GitHub Pages
Run this command to deploy:
`npm run deploy`

> After it finishes, your app will be live at:
> https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME

6. Enable GitHub Pages in Repo Settings
1. Go to your GitHub repository.
2. Click on Settings → Pages.
3. Under Source, select GitHub Actions or gh-pages branch.
4. Click Save.

> the repository of you project you deploy it now. 

7. (Optional) Fix Routing for React Router
If your project uses React Router, update BrowserRouter in index.js:
```
import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/YOUR_REPO_NAME">
  <App />
</BrowserRouter>

```

### Done  The app is now live on GitHub Pages. 