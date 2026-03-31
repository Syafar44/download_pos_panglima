# POS Panglima - Download & Panduan Website

Website download aplikasi POS Panglima dengan panduan penggunaan lengkap.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
# http://localhost:3000
```

## ✨ Features

- 📱 Download manager dengan version selector
- 📋 Panduan penggunaan 9 langkah (accordion)
- 📱 Responsive design (mobile-friendly)
- 🌙 Dark mode support
- ⚡ Fast loading (< 2s)
- 🎨 Clean minimal design

## 📁 Project Structure

```
app/
├── page.tsx           # Main page
├── layout.tsx         # Root layout
├── globals.css        # Styling
└── api/download/      # Download API

components/
├── download-section.tsx
└── guide-section.tsx

lib/
├── app-versions.ts    ⭐ Edit untuk tambah versi
├── guide-data.ts      ⭐ Edit untuk update panduan
└── ui-utils.ts        # Utilities

public/apk/            ⭐ Letakkan APK di sini
```

## 📝 Common Tasks

### Tambah Versi Aplikasi

1. Copy APK ke `public/apk/pos-panglima-v1.3.0.apk`
2. Edit `lib/app-versions.ts`:
```typescript
{
  id: '4',
  version: '1.3.0',
  releaseDate: '15 Januari 2025',
  filename: 'pos-panglima-v1.3.0.apk',
  size: '55 MB',
  changelog: ['Fitur 1', 'Fitur 2'],
  isLatest: true,
},
```
3. Deploy: `git push origin main`

### Update Panduan

1. Edit `lib/guide-data.ts`
2. Update descriptions & details
3. Deploy: `git push origin main`

### Ubah Warna

1. Edit `app/globals.css`
2. Update color tokens
3. Changes auto-reload

## 📚 Documentation

- **[START_HERE.md](./START_HERE.md)** ⭐ Mulai di sini!
- **[QUICK_START.md](./QUICK_START.md)** - Quick reference
- **[README_SETUP.md](./README_SETUP.md)** - Setup guide
- **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** - Dev reference
- **[APK_SETUP.md](./APK_SETUP.md)** - APK management
- **[FILE_STRUCTURE.md](./FILE_STRUCTURE.md)** - Architecture
- **[QA_CHECKLIST.md](./QA_CHECKLIST.md)** - Before deploy
- **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - All docs
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Overview

## 🛠️ Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui

## 📋 Versions

- v1.0.0 - March 2024
- v1.1.0 - August 2024
- v1.2.0 - November 2024 (Latest)

## 🔄 Deployment

```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys!
# Check: https://vercel.com/dashboard
```

## ❓ Need Help?

1. **Setup issues?** → See [QUICK_START.md](./QUICK_START.md)
2. **How to add version?** → See [QUICK_START.md](./QUICK_START.md#-tambah-versi-aplikasi-baru)
3. **How to update guide?** → See [QUICK_START.md](./QUICK_START.md#%EF%B8%8F-update-panduan)
4. **Troubleshooting?** → See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md#-troubleshooting)
5. **Can't find something?** → See [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)

## 📊 Stats

- 📱 Components: 2
- 🔧 API Routes: 1
- 📚 Documentation: 11 files
- 📝 Total Docs: 20,000+ words
- ⏱️ Setup Time: 5 minutes

## ✅ Status

- Production Ready ✅
- Fully Documented ✅
- QA Checklist Included ✅
- Easy to Maintain ✅

## 📞 Support

All documentation is self-service. Start with **[START_HERE.md](./START_HERE.md)** for full guidance.

---

**POS Panglima © 2024**
**Version 1.0**
