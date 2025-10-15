#!/bin/bash

# Deploy script for eTax Mobile PWA

echo "🚀 Deploying eTax Mobile PWA..."

# Add all changes
git add .

# Commit changes
git commit -m "Deploy: Update eTax Mobile PWA $(date)"

# Push to GitHub (if remote exists)
if git remote get-url origin >/dev/null 2>&1; then
    echo "📤 Pushing to GitHub..."
    git push origin master
    echo "✅ Deployed successfully!"
    echo ""
    echo "🌐 Your app is available at:"
    echo "   https://[your-username].github.io/etax-mobile-pwa-HTML--main/"
    echo ""
    echo "📱 To test on mobile:"
    echo "   1. Open Safari on iPhone"
    echo "   2. Go to the URL above"
    echo "   3. Tap Share button"
    echo "   4. Tap 'Add to Home Screen'"
    echo "   5. Open the app from home screen"
else
    echo "⚠️  No GitHub remote found. Please add one:"
    echo "   git remote add origin https://github.com/[your-username]/etax-mobile-pwa-HTML--main.git"
    echo "   git push -u origin master"
fi

echo ""
echo "🎉 Deployment complete!"