#!/bin/bash

# Job Craft Deployment Script
# This script helps with local testing and preparation for GitHub Pages deployment

echo "🚀 Job Craft Deployment Script"
echo "================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version)
echo "📦 Node.js version: $NODE_VERSION"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install
fi

# Build the application
echo "🔨 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output: dist/"
    
    # Check build output
    if [ -d "dist" ]; then
        echo "📊 Build contents:"
        ls -la dist/
        
        echo ""
        echo "🌐 To test locally:"
        echo "   npm run preview"
        echo ""
        echo "🚀 To deploy to GitHub Pages:"
        echo "   1. Push to main/master branch"
        echo "   2. GitHub Actions will auto-deploy"
        echo "   3. Or manually trigger from Actions tab"
    else
        echo "❌ Build output directory not found"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
