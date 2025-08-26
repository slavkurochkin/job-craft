# GitHub Actions & Pages Setup

This directory contains the GitHub Actions workflow for automatically deploying the Job Craft application to GitHub Pages.

## Workflow: `deploy.yml`

The workflow automatically:
1. **Builds** the React application when you push to `main` or `master` branch
2. **Deploys** to GitHub Pages
3. **Uses** Node.js 18 for compatibility

## GitHub Pages Setup

To enable GitHub Pages:

1. Go to your repository **Settings**
2. Navigate to **Pages** section
3. Set **Source** to "GitHub Actions"
4. The workflow will automatically deploy on push to main/master

## Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Build Output

The build process creates a `dist/` folder that gets deployed to GitHub Pages.

## Environment Variables

The workflow automatically handles:
- Node.js version (18.x)
- Build caching
- Artifact upload
- Pages deployment
