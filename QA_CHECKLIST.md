# Quality Assurance Checklist

Checklist lengkap untuk memastikan setiap update berjalan dengan sempurna.

## ✅ Pre-Development Checklist

- [ ] Pull latest dari main branch
- [ ] Dependencies up to date: `pnpm install`
- [ ] No breaking changes di dokumentasi
- [ ] APK file sudah siap (jika update versi)
- [ ] Changelog sudah disiapkan

## ✅ Development Checklist

### Version Update

- [ ] APK file copied to `public/apk/`
- [ ] Filename matches pattern: `pos-panglima-v[VERSION].apk`
- [ ] File is readable: `ls -la public/apk/`
- [ ] File is valid APK: `file public/apk/pos-panglima-v*.apk`
- [ ] Version entry added to `lib/app-versions.ts`
- [ ] ID incremented (last_id + 1)
- [ ] Version format correct: `major.minor.patch`
- [ ] Release date filled: `DD Bulan YYYY`
- [ ] Filename matches config exactly
- [ ] Size matches actual file size
- [ ] Changelog has 4-8 meaningful points
- [ ] Old version has `isLatest: false`
- [ ] New version has `isLatest: true`
- [ ] Only 1 version with `isLatest: true`

### Guide Update

- [ ] Changes documented in `lib/guide-data.ts`
- [ ] Step numbers are sequential (1-9)
- [ ] New steps increment properly
- [ ] If adding mid-list, all numbers after are incremented
- [ ] Icons are relevant emoji
- [ ] Descriptions are clear & concise
- [ ] Details array has 3-5 steps
- [ ] All steps have description matching flow

### Style Changes

- [ ] Color tokens updated in `app/globals.css`
- [ ] Both `:root` and `.dark` sections updated
- [ ] Contrast ratio >= 4.5:1 for text
- [ ] Colors match design system
- [ ] No arbitrary color values used

## ✅ Testing Checklist

### Functional Testing

#### Download Feature
- [ ] Download button visible
- [ ] Download button clickable
- [ ] APK file downloads with correct name
- [ ] Downloaded file is valid APK
- [ ] File size displayed correctly
- [ ] Version selector dropdown opens/closes
- [ ] Can select different versions
- [ ] Clicking version updates display
- [ ] Changelog updates with version selection
- [ ] "Terbaru" badge shows on latest only

#### Guide Feature
- [ ] All guide steps visible
- [ ] Steps numbered 1-9
- [ ] Icons display correctly
- [ ] Accordion expand/collapse works
- [ ] Details show when expanded
- [ ] Details hide when collapsed
- [ ] Tips section visible at bottom
- [ ] Tips content readable

#### Navigation
- [ ] Header navigation works
- [ ] Anchor links (#download, #panduan) work
- [ ] Footer visible and readable
- [ ] All links are functional

### UI/UX Testing

#### Responsiveness
- [ ] Desktop: 1920px wide - full layout
- [ ] Tablet: 768px wide - adjusted layout
- [ ] Mobile: 375px wide - single column
- [ ] All buttons are tap-friendly (48px+)
- [ ] Text is readable at all sizes
- [ ] No horizontal scroll on mobile

#### Accessibility
- [ ] Keyboard navigation works (Tab)
- [ ] Focus indicators visible
- [ ] Colors not only way to convey info
- [ ] Images have alt text (if any)
- [ ] Form labels present (if any)
- [ ] Screen reader friendly (test with VoiceOver/NVDA)

#### Performance
- [ ] Page loads < 2s (first meaningful paint)
- [ ] No console errors
- [ ] No console warnings
- [ ] Bundle size reasonable (~100-200KB)
- [ ] Images optimized
- [ ] No memory leaks

#### Design
- [ ] Colors match spec/token
- [ ] Typography hierarchy correct
- [ ] Spacing consistent (multiples of 4px)
- [ ] Components aligned properly
- [ ] No visual glitches
- [ ] Animations smooth (if any)

### Browser Testing

- [ ] Chrome latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Edge latest
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Cross-platform

- [ ] Windows 10/11
- [ ] macOS latest
- [ ] Linux (Ubuntu)
- [ ] Android 12+
- [ ] iOS 14+

## ✅ Code Quality Checklist

### Type Safety
- [ ] No TypeScript errors: `pnpm tsc --noEmit`
- [ ] All imports are valid
- [ ] PropTypes defined (if using)
- [ ] No `any` types used unnecessarily

### Code Standards
- [ ] Code formatted: `pnpm prettier`
- [ ] No unused imports
- [ ] No unused variables
- [ ] Comments clear and helpful
- [ ] Function names descriptive
- [ ] Variable names meaningful

### Best Practices
- [ ] Client components marked with 'use client'
- [ ] Server components used where possible
- [ ] useEffect dependencies correct
- [ ] No inline styles (use tailwind)
- [ ] No hardcoded values in components
- [ ] Configuration separated from code

## ✅ Pre-Deployment Checklist

### Code Review
- [ ] Code reviewed by peer
- [ ] No commented-out code
- [ ] No debug console.log() statements
- [ ] No secrets/API keys in code
- [ ] Documentation updated

### Git
- [ ] Branch name descriptive: `feature/add-v1.3.0`
- [ ] Commits have clear messages
- [ ] No merge conflicts
- [ ] Remote branch up to date
- [ ] Ready for rebase/merge

### Deployment Readiness
- [ ] All tests passing
- [ ] Build succeeds: `pnpm build`
- [ ] No build warnings
- [ ] Environment variables set
- [ ] APK file backed up

## ✅ Deployment Checklist

### Before Push
```bash
# Final checks
pnpm install      # Fresh deps
pnpm build        # Test build
pnpm start        # Test prod build
# Test everything once more...
```

- [ ] Build successful
- [ ] No errors in build log
- [ ] Preview builds working
- [ ] All checks passing

### Push to Production
```bash
git add .
git commit -m "Descriptive message"
git push origin feature-branch
# Create Pull Request
# Wait for CI/CD
# Merge when ready
# Vercel auto-deploys
```

- [ ] Branch pushed to origin
- [ ] CI/CD checks passing
- [ ] PR approved
- [ ] Merged to main
- [ ] Vercel deployment started

## ✅ Post-Deployment Checklist

### Verify Production
- [ ] Site loads at production URL
- [ ] No errors in production
- [ ] Download button works on prod
- [ ] File downloads correctly
- [ ] Version selector works
- [ ] Guide accordion works
- [ ] Mobile responsive on prod
- [ ] Dark mode works
- [ ] Analytics tracking works (if used)

### Monitor
- [ ] No error spikes in monitoring
- [ ] Load times normal
- [ ] No 404 errors
- [ ] No 500 errors
- [ ] User reports reviewed

### Document
- [ ] Update CHANGELOG.md (if exists)
- [ ] Update version in code comments
- [ ] Announce release (if needed)
- [ ] Archive old APK backup
- [ ] Document any issues encountered

## 🔄 Version Update Workflow

### Complete Flow

```
1. ✅ Pre-Development
   - Pull latest
   - Check APK ready

2. ✅ Development
   - Copy APK to public/apk/
   - Update lib/app-versions.ts
   - Update changelog
   - Commit changes

3. ✅ Testing
   - Local test (pnpm dev)
   - All features work
   - Mobile responsive
   - No errors

4. ✅ Code Quality
   - Format code
   - No TS errors
   - Build succeeds

5. ✅ Pre-Deployment
   - Peer review
   - Final checks

6. ✅ Deployment
   - Push to main
   - Wait for Vercel
   - Monitor

7. ✅ Post-Deployment
   - Verify production
   - Monitor errors
   - Document
```

## 🆘 Emergency Checklist

If something goes wrong in production:

### Immediate Actions
- [ ] Identify the issue (check browser console)
- [ ] Check Vercel deployment logs
- [ ] Rollback to previous version (if critical)
- [ ] Communicate to users (if major issue)

### Debugging
- [ ] Check file exists: `ls -la public/apk/`
- [ ] Check config: `lib/app-versions.ts`
- [ ] Check build logs
- [ ] Check network tab (downloads)
- [ ] Check console errors

### Recovery
```bash
# Rollback last change
git revert HEAD
git push origin main

# Or restore from backup
git reset --hard <previous-commit>
git push -f origin main
```

- [ ] Identified root cause
- [ ] Fixed issue locally
- [ ] Re-deployed to production
- [ ] Verified fix working
- [ ] Post-mortem/notes for future

## 📊 Testing Summary Template

```
Release: POS Panglima v1.3.0
Date: 2024-01-20
Tested By: [Name]

✅ Functional: PASS
✅ UI/UX: PASS
✅ Responsive: PASS
✅ Accessibility: PASS
✅ Performance: PASS
✅ Code Quality: PASS
✅ Deployment: PASS
✅ Production: PASS

Issues Found:
- None

Sign-off: [Name] - Ready for production
```

## 🎯 Success Criteria

Release is successful when:

- ✅ All checklist items checked
- ✅ No critical issues
- ✅ All features working
- ✅ Performance acceptable
- ✅ Users can download APK
- ✅ Guide accessible
- ✅ Mobile responsive
- ✅ No production errors

---

**Use this checklist for every release!**

**Last Updated**: 2024
**Version**: 1.0
