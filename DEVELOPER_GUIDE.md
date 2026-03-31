# Developer Guide - POS Panglima Download Page

Panduan lengkap untuk developer yang akan maintain dan update halaman ini.

## 🏗️ Arsitektur

### File Structure
```
app/
├── page.tsx                  # Main page
├── layout.tsx               # Root layout + metadata
├── globals.css              # Global styles & design tokens
└── api/
    └── download/
        └── route.ts         # Download API handler

components/
├── download-section.tsx     # Download UI + version selector
└── guide-section.tsx        # Panduan penggunaan (accordion)

lib/
├── app-versions.ts          # Version config & utilities
└── guide-data.ts            # Panduan steps & tips

public/
└── apk/                     # APK files storage
    └── README.md            # APK folder documentation
```

## 🔄 Update Workflow

### Skenario 1: Update Versi Aplikasi

**Step 1: Siapkan APK**
- Build APK dari aplikasi POS Panglima
- Letakkan di folder `public/apk/`
- Nama: `pos-panglima-v[MAJOR].[MINOR].[PATCH].apk`

**Step 2: Update Config**
Edit `lib/app-versions.ts`:

```typescript
// Tambahkan entry baru di array APP_VERSIONS
{
  id: '4',                          // Increment dari versi sebelumnya
  version: '1.3.0',                 // Semantic versioning
  releaseDate: '15 Januari 2025',   // Format: tanggal bulan tahun
  filename: 'pos-panglima-v1.3.0.apk',
  size: '55 MB',                    // Ukuran file APK
  changelog: [
    'Fitur login dengan email validation',
    'Improvement UI shift management',
    'Fix bug payment gateway',
    'Performance optimization 30%',
  ],
  isLatest: true,                   // ⭐ Set TRUE untuk versi terbaru
},

// PENTING: Set isLatest: false untuk semua versi lama
{
  id: '3',
  version: '1.2.0',
  // ...
  isLatest: false,  // ⭐ UBAH KE FALSE
},
```

**Step 3: Test**
```bash
pnpm dev
# Buka http://localhost:3000
# Cek:
# - APK download link bekerja
# - Version selector muncul dengan benar
# - Changelog terlihat
# - "Terbaru" badge di versi terbaru
```

**Step 4: Deploy**
```bash
git add .
git commit -m "Update to POS Panglima v1.3.0"
git push origin main
```

### Skenario 2: Update Panduan Penggunaan

**Step 1: Identifikasi Perubahan**
- Fitur baru ditambahkan?
- Flow penggunaan berubah?
- Ada step yang hilang atau berubah?

**Step 2: Update `lib/guide-data.ts`**

Contoh menambah step baru:
```typescript
{
  number: 10,                   // Increment dari terakhir
  title: 'FITUR BARU',
  description: 'Deskripsi singkat fitur baru',
  details: [
    'Step 1: ...',
    'Step 2: ...',
    'Step 3: ...',
  ],
  icon: '✨',                   // Pick emoji yang relevan
},
```

**Step 3: Update Nomor**
Jika menambah di tengah, perlu update nomor step yang di bawahnya.

**Step 4: Test**
```bash
pnpm dev
# Buka http://localhost:3000#panduan
# Cek:
# - Step muncul dengan urutan benar
# - Icon terlihat
# - Accordion expand/collapse berfungsi
# - Detail steps jelas
```

## 🎨 Customization

### Mengubah Warna & Style

Edit `app/globals.css`:

```css
:root {
  /* Primary color (CTA button, badge, dll) */
  --primary: oklch(0.205 0 0);           /* Hitam default */
  
  /* Background & foreground */
  --background: oklch(1 0 0);            /* Putih */
  --foreground: oklch(0.145 0 0);        /* Hitam gelap */
  
  /* Accent color (tips section, dll) */
  --accent: oklch(0.97 0 0);             /* Abu-abu */
  
  /* Border & input */
  --border: oklch(0.922 0 0);            /* Abu-abu terang */
  --input: oklch(0.922 0 0);
  
  /* Muted (secondary text, placeholder) */
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
}

.dark {
  /* Dark mode tokens */
  --primary: oklch(0.985 0 0);           /* Putih */
  --background: oklch(0.145 0 0);        /* Hitam */
  /* ... rest of dark mode */
}
```

Format OKLCH: `oklch(lightness saturation hue)`
- lightness: 0 (gelap) - 1 (terang)
- saturation: 0 (gray) - 0.4+ (saturated)
- hue: 0-360 (warna)

### Copy & Text

Edit langsung di component files:
- Page title: `app/page.tsx`
- Section headers: `components/download-section.tsx` & `guide-section.tsx`
- Panduan steps: `lib/guide-data.ts`
- Tips: `components/guide-section.tsx` (Quick Tips section)

## 🐛 Troubleshooting

### Download Button Tidak Bekerja
**Kemungkinan:**
- File APK tidak ada di `public/apk/[filename]`
- Path di config tidak sesuai dengan nama file
- Format MIME type salah

**Solusi:**
```bash
# Cek file ada
ls -la public/apk/

# Cek console browser untuk error
# Developer Tools > Console

# Verify filename di lib/app-versions.ts
```

### Version Selector Tidak Muncul
**Kemungkinan:**
- Hanya ada 1 versi di array (perlu minimal 2)
- CSS tidak load dengan benar

**Solusi:**
```bash
# Pastikan multiple versions di APP_VERSIONS array
# Cek CSS di browser DevTools > Styles

# Clear cache:
pnpm dev --turbo  # Rebuild
```

### Panduan Steps Tidak Ter-render
**Kemungkinan:**
- Data di `guide-data.ts` tidak valid
- Component tidak import data dengan benar

**Solusi:**
```bash
# Validate TypeScript
pnpm tsc --noEmit

# Check imports di guide-section.tsx
# Harus: import { GUIDE_STEPS } from '@/lib/guide-data'
```

## 📊 API Routes

### GET /api/download?version=1.2.0

Download APK versi tertentu:

```bash
curl "http://localhost:3000/api/download?version=1.2.0" \
  -H "User-Agent: curl" \
  -o pos-panglima.apk
```

Response:
- **200**: File APK (binary)
- **400**: Missing version parameter
- **404**: Version tidak ditemukan / file tidak ada
- **500**: Server error

### HEAD /api/download

Get metadata semua versi:

```bash
curl -I http://localhost:3000/api/download
```

Response:
```json
{
  "versions": [
    {
      "version": "1.0.0",
      "releaseDate": "15 Maret 2024",
      "size": "45 MB",
      "isLatest": false,
      "filename": "pos-panglima-v1.0.0.apk"
    },
    ...
  ]
}
```

## 📈 Performance

### Optimization Tips

1. **APK Files**
   - Gunakan compression saat build APK
   - Consider splitting jika >100MB

2. **Page Loading**
   - Panduan accordion default collapsed (load cepat)
   - Large images use lazy loading (future)

3. **Caching**
   - API download: Cache-Control: public, max-age=86400
   - Static: Vercel auto-cache

## 🔐 Security

- ✅ No database queries (static config)
- ✅ No user input validation needed
- ✅ APK served from public folder (safe)
- ✅ API routes read-only operations
- ⚠️ Ensure APK files virus-scanned before upload

## 📝 Checklist Sebelum Deploy

- [ ] APK file ada di `public/apk/`
- [ ] Filename di config sesuai dengan file actual
- [ ] Version nomor di-increment dengan benar
- [ ] isLatest: true hanya 1 versi
- [ ] Changelog sudah updated
- [ ] Download button test di localhost
- [ ] Version selector berfungsi
- [ ] Mobile responsive cek
- [ ] Dark mode test
- [ ] Git commit message jelas

## 📞 Quick Reference

| Task | File | What to Update |
|------|------|---|
| Add version | `lib/app-versions.ts` | Add entry ke APP_VERSIONS |
| Change warna | `app/globals.css` | Edit --primary, --accent dll |
| Change copy | `components/*.tsx` | Edit text langsung |
| Add panduan | `lib/guide-data.ts` | Add entry ke GUIDE_STEPS |
| APK path | `lib/app-versions.ts` | `filename` field harus sesuai `public/apk/` |
| API response | `app/api/download/route.ts` | Edit response handling |

---

**Last Updated**: 2024
**Version**: 1.0
**Maintained By**: Development Team
