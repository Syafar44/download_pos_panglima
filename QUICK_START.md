# Quick Start Guide

Mulai dengan cepat untuk membuat dan maintain halaman download POS Panglima.

## ⚡ 5 Menit Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm dev

# 3. Open browser
# http://localhost:3000

# 4. Done! ✅
```

## 🎯 Common Tasks

### ➕ Tambah Versi Aplikasi Baru

**Time: 2 minutes**

```bash
# 1. Copy APK ke public folder
cp ~/Downloads/pos-panglima-v1.3.0.apk public/apk/

# 2. Edit lib/app-versions.ts
# Tambahkan entry baru:
{
  id: '4',
  version: '1.3.0',
  releaseDate: '15 Januari 2025',
  filename: 'pos-panglima-v1.3.0.apk',
  size: '55 MB',
  changelog: [
    'Fitur login dengan email validation',
    'Improvement UI shift management',
  ],
  isLatest: true,        // ⭐ Set ini
},

# 3. Set old version to false
{
  id: '3',
  version: '1.2.0',
  // ...
  isLatest: false,       // ⭐ Change dari true ke false
},

# 4. Push
git add .
git commit -m "Update POS Panglima to v1.3.0"
git push origin main
```

### ✏️ Update Panduan

**Time: 3 minutes**

```bash
# Edit lib/guide-data.ts

export const GUIDE_STEPS: GuideStep[] = [
  // ... existing steps ...
  {
    number: 10,
    title: 'FITUR BARU',
    description: 'Penjelasan singkat',
    details: [
      'Detail step 1',
      'Detail step 2',
    ],
    icon: '✨',
  },
];

# Push
git add lib/guide-data.ts
git commit -m "Update panduan: add fitur baru"
git push origin main
```

### 🎨 Ubah Warna

**Time: 1 minute**

```bash
# Edit app/globals.css

:root {
  --primary: oklch(0.205 0 0);     /* Main color */
  --accent: oklch(0.97 0 0);       /* Accent color */
  --background: oklch(1 0 0);      /* Background */
}

# Changes apply instantly with hot reload
```

### 🧪 Test Download

```bash
# 1. Dev server running (pnpm dev)
# 2. Open http://localhost:3000
# 3. Click "Download APK" button
# 4. File should download

# If error, check:
# - File exists: ls -la public/apk/
# - Filename matches: lib/app-versions.ts
```

## 📁 File Cheatsheet

| File | Purpose | When to Edit |
|------|---------|---|
| `lib/app-versions.ts` | Version configuration | Tambah/ubah versi |
| `lib/guide-data.ts` | Panduan steps | Ubah panduan |
| `app/globals.css` | Colors & styles | Change design |
| `components/download-section.tsx` | Download UI | Design changes |
| `components/guide-section.tsx` | Panduan UI | Design changes |
| `public/apk/` | APK files | Add/remove APK |

## 🚀 Deploy

```bash
git add .
git commit -m "Your message"
git push origin main

# Vercel auto-deploys!
# Check: https://vercel.com/dashboard
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Download button 404 | Check file exists in `public/apk/` |
| Version not showing | Verify `lib/app-versions.ts` has multiple versions |
| Styling wrong | Check `app/globals.css` color tokens |
| Build error | Run `pnpm install` then `pnpm dev` |

## 📚 Full Documentation

- **Setup & APK**: See `APK_SETUP.md`
- **Development**: See `DEVELOPER_GUIDE.md`
- **Main README**: See `README_SETUP.md`

## 🔗 Project Links

- 📱 App: http://localhost:3000
- 📝 Config: `/lib/app-versions.ts`
- 🎨 Styling: `/app/globals.css`
- 📚 Guide Data: `/lib/guide-data.ts`

---

**Everything clear? Let's code! 🚀**
