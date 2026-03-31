import { DownloadSection } from '@/components/download-section';
import { GuideSection } from '@/components/guide-section';
import Image from 'next/image';

export const metadata = {
  title: 'POS Panglima - Download & Panduan',
  description: 'Download aplikasi POS Panglima terbaru dan pelajari cara penggunaannya dengan panduan lengkap',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/app-icon.png" alt="POS Panglima Icon" width={40} height={40} />
              <h1 className="font-bold text-foreground">POS Panglima</h1>
            </div>
            <nav className="hidden gap-6 sm:flex">
              <a href="#download" className="text-sm text-muted-foreground hover:text-foreground">
                Download
              </a>
              <a href="#panduan" className="text-sm text-muted-foreground hover:text-foreground">
                Panduan
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div id="download">
        <DownloadSection />
      </div>

      <div id="panduan">
        <GuideSection />
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-6">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Panglima Roqiiqu Group. Semua hak cipta dilindungi.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Versi saat ini: <strong>1.0.0</strong>
          </p>
        </div>
      </footer>
    </main>
  );
}
