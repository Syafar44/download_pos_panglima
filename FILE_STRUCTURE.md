# File Structure & Documentation

Dokumentasi lengkap semua file di project POS Panglima Download Page.

## 📦 Project Structure

```
pos-panglima-download/
│
├── 📄 QUICK_START.md              ⭐ START HERE! Quick reference
├── 📄 README_SETUP.md             Setup instructions & folder structure
├── 📄 DEVELOPER_GUIDE.md          Detailed dev guide & troubleshooting
├── 📄 APK_SETUP.md                APK file management
├── 📄 FILE_STRUCTURE.md           This file
│
├── 📁 app/                        Next.js app directory
│   ├── page.tsx                   Main page component
│   ├── layout.tsx                 Root layout + metadata
│   ├── globals.css                Global styles & design tokens ⭐
│   │
│   └── 📁 api/
│       └── 📁 download/
│           └── route.ts           Download API handler
│
├── 📁 components/                 React components
│   ├── download-section.tsx       Download UI + version selector
│   ├── guide-section.tsx          Panduan accordion component
│   └── 📁 ui/                     shadcn/ui components (auto)
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
│
├── 📁 lib/                        Utilities & data
│   ├── app-versions.ts            ⭐ Version config (UPDATE THIS!)
│   ├── guide-data.ts              ⭐ Panduan steps (UPDATE THIS!)
│   ├── ui-utils.ts                UI utility functions
│   └── utils.ts                   General utilities (shadcn)
│
├── 📁 hooks/                      React hooks (auto)
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── 📁 public/                     Static files
│   ├── 📁 apk/                    ⭐ APK files location
│   │   ├── README.md
│   │   ├── pos-panglima-v1.0.0.apk
│   │   ├── pos-panglima-v1.1.0.apk
│   │   ├── pos-panglima-v1.2.0.apk
│   │   └── pos-panglima-v1.3.0.apk  (future)
│   │
│   ├── icon.svg                   Favicon (optional)
│   ├── icon-light-32x32.png       Light mode icon (optional)
│   └── icon-dark-32x32.png        Dark mode icon (optional)
│
├── 📁 .github/                    GitHub config (optional)
│   └── workflows/                 CI/CD workflows (optional)
│
├── 📄 package.json                Dependencies
├── 📄 tsconfig.json               TypeScript config
├── 📄 tailwind.config.ts          Tailwind config
├── 📄 next.config.mjs             Next.js config
└── 📄 .gitignore                  Git ignore rules
```

## 🎯 Key Files Explanation

### ⭐ Files to Update Regularly

#### `lib/app-versions.ts`
**When to edit**: Tambah/ubah/hapus versi aplikasi

```typescript
interface AppVersion {
  id: string;                    // Unique ID, increment: '1', '2', '3'
  version: string;               // Semantic: '1.2.0'
  releaseDate: string;           // Format: '15 Maret 2024'
  filename: string;              // Exact: 'pos-panglima-v1.2.0.apk'
  size: string;                  // Info: '52 MB'
  changelog: string[];           // 4-8 bullet points
  isLatest: boolean;             // ONLY 1 version = true
}
```

**What to do**:
1. Add new version to array
2. Update old version: `isLatest: false` → `isLatest: false`
3. Set new version: `isLatest: false` → `isLatest: true`
4. Push APK file to `public/apk/`

#### `lib/guide-data.ts`
**When to edit**: Update panduan penggunaan aplikasi

```typescript
interface GuideStep {
  number: number;              // 1, 2, 3, ... sequential
  title: string;               // 'LOGIN', 'MULAI SHIFT'
  description: string;         // Brief description
  details: string[];           // 3-5 detailed steps
  icon: string;                // Emoji: '🔐', '⏰'
}
```

**What to do**:
1. Edit existing step if flow changed
2. Add new step with increment number
3. Update all numbers if inserting in middle
4. Match with actual app features

#### `app/globals.css`
**When to edit**: Change colors, spacing, fonts

```css
:root {
  /* Color tokens */
  --primary: oklch(0.205 0 0);        /* Main brand color */
  --accent: oklch(0.97 0 0);          /* Highlights */
  --background: oklch(1 0 0);         /* Background */
  --foreground: oklch(0.145 0 0);     /* Text */
  --border: oklch(0.922 0 0);         /* Borders */
  --muted: oklch(0.97 0 0);           /* Secondary items */
  
  /* Dark mode below */
}
```

**Format**: OKLCH `oklch(lightness saturation hue)`
- Lightness: 0 (dark) → 1 (light)
- Saturation: 0 (gray) → 0.4+ (colored)
- Hue: 0-360 (color wheel)

### 📱 Component Files

#### `app/page.tsx`
Main landing page. Contains:
- Header navigation
- Download section
- Guide section
- Footer

**Edit for**: Change page title, add sections, restructure

#### `components/download-section.tsx`
Download UI component. Features:
- Current version display
- Changelog accordion
- Download button
- Version selector dropdown

**Edit for**: Change download UI, add features like stats

#### `components/guide-section.tsx`
Panduan accordion component. Features:
- 9 expandable steps
- Icon + title + description
- Detailed steps inside
- Tips section at bottom

**Edit for**: Change guide layout, styling, tips

### 🔧 Utility Files

#### `lib/ui-utils.ts`
Helper functions for UI:
- `formatFileSize()` - Convert bytes to MB
- `getRelativeDate()` - "2 hari yang lalu"
- `formatChangelogPoint()` - Add icons to changelog
- `isRecentVersion()` - Check if recent

**Use for**: Reusable UI logic

#### `app/api/download/route.ts`
API endpoint for downloads:
- `GET /api/download?version=1.2.0` - Download APK
- `HEAD /api/download` - Get metadata

**Edit for**: Add tracking, analytics, or auth

### 📚 Documentation Files

| File | Purpose | Update Frequency |
|------|---------|---|
| `QUICK_START.md` | Quick reference | When adding major features |
| `README_SETUP.md` | Setup & structure | When changing folder structure |
| `DEVELOPER_GUIDE.md` | Dev documentation | When changing workflow |
| `APK_SETUP.md` | APK management | When changing APK process |
| `FILE_STRUCTURE.md` | This file | As needed |

## 🔄 Common Workflows

### Adding New Version

1. **`public/apk/`**
   - Copy APK file: `pos-panglima-v1.3.0.apk`

2. **`lib/app-versions.ts`**
   - Add to `APP_VERSIONS` array
   - Set `isLatest: true`
   - Set old version `isLatest: false`

3. **Test**
   - `pnpm dev`
   - Check download works
   - Verify version selector

4. **Deploy**
   - `git push origin main`
   - Wait for Vercel to deploy

### Updating Guide

1. **`lib/guide-data.ts`**
   - Edit `GUIDE_STEPS` array
   - Update descriptions/details
   - Add/remove steps as needed

2. **Test**
   - Check accordion works
   - Verify all steps expand/collapse
   - Mobile responsive

3. **Deploy**
   - `git push origin main`

### Changing Colors

1. **`app/globals.css`**
   - Update color tokens in `:root`
   - Also update `.dark` section
   - Test light/dark mode

2. **Deploy**
   - Hot reload in dev
   - Push to main when done

## 📊 Component Dependency Graph

```
app/page.tsx (Main)
├── Header (navigation)
├── DownloadSection
│   ├── Card (shadcn)
│   ├── Button (shadcn)
│   └── ChevronDown (lucide-react)
├── GuideSection
│   ├── Card (shadcn)
│   ├── ChevronDown (lucide-react)
│   └── State: expandedStep
└── Footer
```

## 🚀 Deployment

### Files to Push to Git

```bash
# Always commit
git add app/
git add components/
git add lib/
git add public/apk/              # If added APK
git add package.json             # If dependencies changed
git add *.md                      # Documentation

# Generally don't commit
.next/
node_modules/
.env.local
```

### Vercel Auto-deployment

When pushing to main:
1. Vercel detects changes
2. Auto-builds & deploys
3. Available at your-domain.vercel.app
4. Check deployment at vercel.com/dashboard

## 💾 Backup Strategy

Recommended backup structure:

```
backups/
├── 2024-01-15-v1.2.0/
│   ├── app-versions.ts          # Config at this version
│   └── pos-panglima-v1.2.0.apk  # APK backup
├── 2024-01-20-v1.3.0/
│   ├── app-versions.ts
│   └── pos-panglima-v1.3.0.apk
```

## 🔐 Security Considerations

- ✅ No database (static files only)
- ✅ No user authentication
- ✅ No sensitive data storage
- ✅ APK files virus-scanned before upload
- ⚠️ Rate limiting recommended if high traffic

## 📈 Performance Tips

- APK files: Public caching 24 hours
- Static pages: Vercel edge caching
- Images: Lazy loading (future)
- CSS: Minified automatically
- JavaScript: Tree-shaken by bundler

## 🧪 Testing Checklist

Before each deployment:

- [ ] APK file exists & accessible
- [ ] Version config matches filename
- [ ] Download button works
- [ ] Version selector displays all versions
- [ ] Guide accordion expands/collapses
- [ ] Mobile responsive (check on phone)
- [ ] Dark mode works
- [ ] No console errors
- [ ] Links not broken
- [ ] Footer visible

## 📞 Support & Questions

For issues with:
- **Setup**: See `QUICK_START.md`
- **Version management**: See `APK_SETUP.md`
- **Development**: See `DEVELOPER_GUIDE.md`
- **General**: See `README_SETUP.md`

---

**Last Updated**: 2024
**Version**: 1.0
**Total Lines of Code**: ~1000+ (configs, utils, components)
