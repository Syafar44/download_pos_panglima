'use client';

import { APP_VERSIONS, getDownloadLink, getLatestVersion } from '@/lib/app-versions';
import { formatChangelogPoint } from '@/lib/ui-utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, Download, Package } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function DownloadSection() {
  const [selectedVersion, setSelectedVersion] = useState(getLatestVersion());
  const [showVersionList, setShowVersionList] = useState(false);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-foreground">POS Panglima</h1>
          <p className="text-lg text-muted-foreground">Sistem Aplikasi POS Terpadu untuk Bisnis Anda</p>
        </div>

        {/* Main Download Card */}
        <Card className="mb-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 text-6xl">
              <Image src="/app-icon.png" alt="POS Panglima Icon" width={80} height={80} className="mx-auto rounded-lg border-2 border-primary" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">Versi Terbaru</h2>
            <p className="mb-4 text-primary">{selectedVersion.version}</p>
            <p className="mb-4 text-sm text-muted-foreground">
              Dirilis: {selectedVersion.releaseDate}
            </p>
            <p className="text-sm text-muted-foreground">Ukuran: {selectedVersion.size}</p>
          </div>

          {/* Changelog */}
          <div className="mb-6 rounded-lg bg-background p-4">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
              <span>📋</span>
              <span>Yang Baru di Versi Ini:</span>
            </h3>
            <ul className="space-y-2">
              {selectedVersion.changelog.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 flex-shrink-0">{formatChangelogPoint(item).split(' ')[0]}</span>
                  <span>{formatChangelogPoint(item).split(' ').slice(1).join(' ')}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Button */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href={getDownloadLink(selectedVersion.filename)} download className="sm:w-auto">
              <Button className="w-full gap-2 bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4" />
                <span>Download APK</span>
                <span className="text-xs opacity-75">({selectedVersion.size})</span>
              </Button>
            </a>
          </div>
        </Card>

        {/* Info Box */}
        <Card className="border-border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tips:</strong> Pastikan Anda memiliki izin install aplikasi dari sumber tak dikenal di
            pengaturan keamanan Android sebelum menginstal APK.
          </p>
        </Card>
      </div>
    </section>
  );
}
