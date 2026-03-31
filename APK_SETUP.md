# Panduan Setup APK Files

Dokumentasi untuk setup dan menambah file APK aplikasi POS Panglima.

## 📱 Persyaratan

File APK harus:
- Format: `.apk` (Android Package Archive)
- Location: `public/apk/`
- Naming: `pos-panglima-v[VERSION].apk`
  - Contoh: `pos-panglima-v1.0.0.apk`
  - ✅ Correct
  - ❌ `POS-Panglima-1.0.0.apk` (uppercase, tidak konsisten)
  - ❌ `pos_panglima_1.0.0.apk` (underscore, harus dash)

## 📥 Cara Menambah APK

### Metode 1: Copy File Manual

```bash
# Dari source/download folder
cp ~/Downloads/pos-panglima-v1.3.0.apk public/apk/

# Verify
ls -lh public/apk/
```

Output:
```
-rw-r--r-- pos-panglima-v1.0.0.apk (45M)
-rw-r--r-- pos-panglima-v1.1.0.apk (48M)
-rw-r--r-- pos-panglima-v1.2.0.apk (52M)
-rw-r--r-- pos-panglima-v1.3.0.apk (55M)
```

### Metode 2: Download dari URL

```bash
# Jika APK tersimpan di server/cloud
cd public/apk/

# Download dengan wget
wget https://example.com/builds/pos-panglima-v1.3.0.apk

# Atau dengan curl
curl -O https://example.com/builds/pos-panglima-v1.3.0.apk

# Verify file
file pos-panglima-v1.3.0.apk
# Output: Zip archive data, at least v2.0 to extract
```

### Metode 3: Git Large File Storage (LFS)

Jika file APK besar (>100MB):

```bash
# Install git-lfs
# macOS:
brew install git-lfs

# Linux:
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
sudo apt-get install git-lfs

# Windows:
# Download dari https://git-lfs.github.com/

# Setup LFS tracking
git lfs install
git lfs track "public/apk/*.apk"

# Add file
git add .gitattributes
git add public/apk/pos-panglima-v1.3.0.apk
git commit -m "Add APK v1.3.0"
git push origin main
```

## 🧪 Testing APK

### Local Testing

```bash
# 1. Start dev server
pnpm dev

# 2. Open browser
# http://localhost:3000

# 3. Test download
# Klik tombol "Download APK"
# Verify:
# - File download dimulai
# - Nama file benar
# - File size terlihat
```

### Debug

Jika download tidak bekerja:

```bash
# Check file exists
ls -la public/apk/

# Check file permissions
chmod 644 public/apk/*.apk

# Check file is valid APK
file public/apk/pos-panglima-v1.3.0.apk
# Output: Zip archive data, at least v2.0 to extract

# Tail server logs
pnpm dev

# Open DevTools > Console untuk error
```

## 📊 File Structure

```
public/
└── apk/
    ├── README.md                          # Info file
    ├── pos-panglima-v1.0.0.apk           # 45 MB
    ├── pos-panglima-v1.1.0.apk           # 48 MB
    ├── pos-panglima-v1.2.0.apk           # 52 MB
    └── pos-panglima-v1.3.0.apk           # 55 MB (latest)
```

## 🔗 Update Configuration

**PENTING**: Setelah menambah APK, update `lib/app-versions.ts`

```typescript
import { AppVersion } from '@/lib/app-versions';

export const APP_VERSIONS: AppVersion[] = [
  // ... existing versions with isLatest: false ...
  {
    id: '4',
    version: '1.3.0',                      // ⭐ Match dengan APK filename
    releaseDate: '15 Januari 2025',
    filename: 'pos-panglima-v1.3.0.apk',   // ⭐ EXACT match dengan file
    size: '55 MB',                         // ⭐ Size sesuai file actual
    changelog: [
      'Fitur login dengan email validation',
      'Improvement UI shift management',
      'Fix bug payment gateway',
      'Performance optimization 30%',
    ],
    isLatest: true,                        // ⭐ Set TRUE untuk versi terbaru
  },
];
```

## 📋 Verification Checklist

Sebelum commit & push:

- [ ] File APK ada di `public/apk/`
- [ ] Nama file sesuai: `pos-panglima-v[VERSION].apk`
- [ ] File size correct (sesuai actual file size)
- [ ] Entry di `app-versions.ts` sudah ditambah
- [ ] Version number match dengan filename
- [ ] `isLatest: true` hanya di 1 versi
- [ ] Semua versi lama punya `isLatest: false`
- [ ] Changelog ter-update
- [ ] Test download di localhost berfungsi
- [ ] Version selector muncul dengan benar

## 🚀 Deployment

```bash
# 1. Add files
git add public/apk/pos-panglima-v1.3.0.apk
git add lib/app-versions.ts

# 2. Commit
git commit -m "Release POS Panglima v1.3.0

- Add APK file (55 MB)
- Update version config
- Add changelog for v1.3.0"

# 3. Push
git push origin main

# 4. Vercel auto-deploys
# Check: https://vercel.com/dashboard

# 5. Verify live
# Test on https://your-domain.vercel.app
```

## ⚡ Optimizations

### APK Size Optimization

Sebelum upload, pastikan APK sudah di-optimize:

```bash
# Android Studio / Gradle
./gradlew bundleRelease

# Size check
du -h app-release.apk

# Ideal: 30-60 MB untuk POS app
```

### Caching Strategy

Website uses Vercel's built-in caching:
- Static files: Cached indefinitely
- APK files: Cache-Control: max-age=86400 (24 hours)

### Bandwidth Optimization

Jika concern tentang bandwidth:

1. **Option 1**: Host APK di cloud storage (Google Drive, AWS S3, etc)
   - Update download link di config

2. **Option 2**: Server-side compression
   - Zip file sebelum upload
   - User extract locally

3. **Option 3**: Split APK
   - Android App Bundle (.aab)
   - User download specific variant

## 🐛 Troubleshooting

### APK File Corrupt

```bash
# Verify dengan Android tools
aapt dump badging pos-panglima-v1.3.0.apk | grep package

# Output:
# package: name='com.example.posapp' versionCode='130' versionName='1.3.0'
```

### Download Button Returns 404

```
Error: APK file not found on server

Solusi:
1. Check file exists: ls -la public/apk/
2. Check filename match di lib/app-versions.ts
3. Restart dev server: pnpm dev
```

### File Size Display Wrong

Edit `lib/app-versions.ts`:

```typescript
// Get actual size:
// ls -lh public/apk/pos-panglima-v1.3.0.apk

size: '55 MB',  // Update ini
```

## 📚 References

- [Android APK Format](https://developer.android.com/guide/components/fundamentals)
- [Vercel Static Files](https://vercel.com/docs/concepts/projects/project-configuration)
- [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

---

**Last Updated**: 2024
**Version**: 1.0
