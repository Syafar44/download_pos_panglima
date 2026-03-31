import { NextRequest, NextResponse } from 'next/server';
import { APP_VERSIONS, getDownloadLink } from '@/lib/app-versions';
import path from 'path';
import fs from 'fs';

/**
 * API Route untuk handle download APK dengan tracking versi
 * GET /api/download?version=1.0.0
 */

export async function GET(request: NextRequest) {
  try {
    const version = request.nextUrl.searchParams.get('version');

    if (!version) {
      return NextResponse.json(
        { error: 'Version parameter is required' },
        { status: 400 }
      );
    }

    // Validasi versi yang diminta
    const appVersion = APP_VERSIONS.find((v) => v.version === version);

    if (!appVersion) {
      return NextResponse.json(
        { error: 'Version not found' },
        { status: 404 }
      );
    }

    // Path ke file APK
    const filePath = path.join(
      process.cwd(),
      'public',
      'apk',
      appVersion.filename
    );

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        {
          error: 'APK file not found on server',
          version: version,
          filename: appVersion.filename,
        },
        { status: 404 }
      );
    }

    // Get file stats
    const fileStats = fs.statSync(filePath);
    const fileBuffer = fs.readFileSync(filePath);

    // Return file dengan header yang sesuai
    const headers = new Headers();
    headers.set('Content-Type', 'application/vnd.android.package-archive');
    headers.set('Content-Disposition', `attachment; filename="${appVersion.filename}"`);
    headers.set('Content-Length', fileStats.size.toString());
    headers.set('Cache-Control', 'public, max-age=86400');

    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/download/info - Info metadata semua versi
 */
export async function HEAD(request: NextRequest) {
  try {
    const version = request.nextUrl.searchParams.get('version');

    if (!version) {
      return NextResponse.json(
        {
          versions: APP_VERSIONS.map((v) => ({
            version: v.version,
            releaseDate: v.releaseDate,
            size: v.size,
            isLatest: v.isLatest,
            filename: v.filename,
          })),
        },
        { status: 200 }
      );
    }

    const appVersion = APP_VERSIONS.find((v) => v.version === version);

    if (!appVersion) {
      return NextResponse.json(
        { error: 'Version not found' },
        { status: 404 }
      );
    }

    const filePath = path.join(
      process.cwd(),
      'public',
      'apk',
      appVersion.filename
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'APK file not found' },
        { status: 404 }
      );
    }

    const fileStats = fs.statSync(filePath);

    const headers = new Headers();
    headers.set('Content-Type', 'application/vnd.android.package-archive');
    headers.set('Content-Length', fileStats.size.toString());

    return new NextResponse(null, { headers });
  } catch (error) {
    console.error('HEAD error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
