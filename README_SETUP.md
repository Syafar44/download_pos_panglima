# POS Panglima - Download & Panduan Website

Halaman website untuk download aplikasi POS Panglima dan panduan penggunaan.

## 📁 Struktur Folder

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx                 # Halaman utama
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Styling global
├── components/
│   ├── download-section.tsx     # Komponen section download
│   └── guide-section.tsx        # Komponen section panduan
├── lib/
│   ├── app-versions.ts          # Konfigurasi versi aplikasi
│   └── guide-data.ts            # Data panduan penggunaan
├── public/
│   └── apk/                     # Folder untuk menyimpan file APK
│       ├── pos-panglima-v1.0.0.apk
│       ├── pos-panglima-v1.1.0.apk
│       └── pos-panglima-v1.2.0.apk
└── README_SETUP.md              # File ini
```

## 🚀 Cara Menggunakan

### 1. **Instalasi Awal**

```bash
# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
```

Buka http://localhost:3000 di browser Anda.

### 2. **Menambah Versi Aplikasi Baru**

Ketika ada versi aplikasi baru atau update:

#### A. Letakkan file APK di folder public
```
public/apk/pos-panglima-v[VERSION].apk
```

#### B. Update file `lib/app-versions.ts`

Tambahkan entry baru di array `APP_VERSIONS`:

```typescript
export const APP_VERSIONS: AppVersion[] = [
  // ... versi lama
  {
    id: '4',
    version: '1.3.0',
    releaseDate: '15 Januari 2025',
    filename: 'pos-panglima-v1.3.0.apk',
    size: '55 MB',
    changelog: [
      'Fitur baru 1',
      'Fitur baru 2',
      'Bug fix',
      'Performance improvement',
    ],
    isLatest: true,  // ⭐ Set ini ke true untuk versi terbaru
  },
  // ... pastikan versi lama di set isLatest: false
];
```

### 3. **Update Panduan Penggunaan** (Jika Diperlukan)

Edit file `lib/guide-data.ts` jika ada perubahan pada langkah penggunaan aplikasi:

```typescript
export const GUIDE_STEPS: GuideStep[] = [
  {
    number: 1,
    title: 'LOGIN',
    description: 'Deskripsi singkat',
    details: [
      'Detail langkah 1',
      'Detail langkah 2',
      // ...
    ],
    icon: '🔐',
  },
  // ... tambah atau edit sesuai kebutuhan
];
```

## 📝 Catatan Penting

- **File APK**: Pastikan file APK ada di folder `public/apk/` sebelum di-push
- **Filename**: Nama file HARUS sesuai dengan yang di-set di `app-versions.ts` (field `filename`)
- **Version ID**: Gunakan angka incremental (1, 2, 3, dst) untuk `id`
- **isLatest**: Hanya 1 versi yang boleh punya `isLatest: true`
- **Release Date**: Format bebas, contoh: "15 Maret 2024"

## 🎨 Customization

### Warna & Style

Edit `app/globals.css` untuk mengubah design tokens:

```css
:root {
  --primary: oklch(0.205 0 0);  /* Warna utama */
  --background: oklch(1 0 0);    /* Background */
  /* ... color tokens lainnya */
}
```

### Copy & Text

Edit komponen atau file data untuk mengubah text dan description.

## 📱 Preview

Website memiliki 2 section utama:

1. **Download Section**
   - Preview versi terbaru
   - List changelog
   - Versi selector (dropdown)
   - Download button

2. **Guide Section**
   - 9 langkah penggunaan aplikasi
   - Expandable accordion per langkah
   - Tips penting di bawah

## 🔧 Deployment

Deploy ke Vercel:

```bash
# Push ke GitHub
git add .
git commit -m "Update POS Panglima to v1.3.0"
git push origin main

# Vercel akan auto-deploy
# Atau manual deploy via Vercel Dashboard
```

## 📞 Support

Jika ada pertanyaan atau butuh update lebih lanjut, hubungi tim developer.

---

**Last Updated**: 2024
**Version**: 1.0
