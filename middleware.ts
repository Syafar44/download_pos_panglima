import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    
    const token = await getToken({ 
        req: request, 
        secret: process.env.NEXTAUTH_SECRET 
    });

    const isAuthenticated = !!token;
    const isAuthPage = pathname.startsWith('/auth');

    // Kalau sudah auth tapi akses /auth → redirect ke /
    if (isAuthenticated && isAuthPage) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Kalau belum auth tapi akses / → redirect ke /auth
    if (!isAuthenticated && !isAuthPage) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|icons|images).*)',
    ],
};
// ```

// ---

// ### Alur Logikanya
// ```
// User akses /
// ├── Sudah auth  → ✅ lanjut
// └── Belum auth  → 🔄 redirect ke /auth

// User akses /auth
// ├── Belum auth  → ✅ lanjut (tampil form auth)
// └── Sudah auth  → 🔄 redirect ke /
// ```

// ---

// ### Struktur Folder
// ```
// project/
// ├── middleware.ts        ← di sini, ROOT project
// ├── src/
// │   ├── app/
// │   │   ├── page.tsx         ← route /
// │   │   └── auth/
// │   │       └── page.tsx     ← route /auth
// │   └── lib/
// │       └── axios/
// │           └── instance.tsx