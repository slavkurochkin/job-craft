# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your Job Craft application to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

- ✅ GitHub repository created
- ✅ Application running locally (`npm run dev` works)
- ✅ Node.js 18+ installed
- ✅ Git configured

## 🎯 Quick Deployment Steps

### 1. Push Your Code to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Job Craft application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/job-craft.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Set **Source** to "GitHub Actions"
5. Click **Save**

### 3. Automatic Deployment

The GitHub Actions workflow will automatically:
- ✅ Build your application
- ✅ Deploy to GitHub Pages
- ✅ Update on every push to main/master

## 🔧 Manual Deployment Testing

### Test Build Locally

```bash
# Test the build process
npm run deploy:test

# Or use the deployment script
npm run deploy:prepare
```

### Preview Production Build

```bash
npm run preview
# Opens http://localhost:4173
```

## 📁 Repository Structure

```
job-craft/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/                        # Source code
├── scripts/
│   └── deploy.sh              # Deployment helper script
├── package.json               # Project configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

## 🌐 GitHub Pages Configuration

### Base Path
The application is configured with base path `/job-craft/` for GitHub Pages:
- **Local development**: `http://localhost:3000/`
- **GitHub Pages**: `https://YOUR_USERNAME.github.io/job-craft/`

### Build Output
- **Build directory**: `dist/`
- **Deployed files**: HTML, CSS, JS, and assets

## 🚨 Troubleshooting

### Common Issues

#### 1. Build Fails
```bash
# Check TypeScript errors
npm run type-check

# Fix linting issues
npm run lint
```

#### 2. GitHub Actions Fail
- Check the **Actions** tab for error details
- Ensure Node.js 18+ is specified
- Verify repository permissions

#### 3. Pages Not Loading
- Check GitHub Pages settings
- Verify base path in `vite.config.ts`
- Wait for deployment to complete (can take 5-10 minutes)

### Debug Commands

```bash
# Check build output
ls -la dist/

# Test production build locally
npm run preview

# Check GitHub Actions status
# Go to Actions tab in your repository
```

## 🔄 Continuous Deployment

### Automatic Triggers
- ✅ Push to `main` branch
- ✅ Push to `master` branch
- ✅ Pull request to main/master
- ✅ Manual workflow dispatch

### Manual Deployment
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## 📊 Deployment Status

### Check Deployment
- **Actions tab**: View workflow runs
- **Pages tab**: See deployment status
- **Repository settings**: Verify Pages configuration

### Deployment URL
Your application will be available at:
```
https://YOUR_USERNAME.github.io/job-craft/
```

## 🎉 Success Indicators

- ✅ GitHub Actions workflow completes successfully
- ✅ Pages tab shows "Your site is published"
- ✅ Application loads at GitHub Pages URL
- ✅ All features work as expected

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## 📞 Support

If you encounter issues:
1. Check the **Actions** tab for error details
2. Review this deployment guide
3. Check GitHub Pages documentation
4. Verify all prerequisites are met

---

**🎯 Your Job Craft application will be live on GitHub Pages after following these steps!**
