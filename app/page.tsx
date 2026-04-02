import { DownloadSection } from '@/components/download-section';
import { GuideSection } from '@/components/guide-section';
import Image from 'next/image';

export const metadata = {
  title: 'POS Panglima - Download & Panduan',
  description: 'Download aplikasi POS Panglima terbaru dan pelajari cara penggunaannya dengan panduan lengkap',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans">
      {/* Header Navigation - Sticky dengan efek Glassmorphism */}
      <header className="sticky top-0 z-50 w-full border-b border-[#800000]/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-lg bg-[#800000] p-1.5 shadow-md shadow-maroon-900/20">
                <Image 
                  src="/logo.png" 
                  alt="POS Panglima Icon" 
                  width={50} 
                  height={50} 
                  className="rounded" // Opsional: jika icon ingin dibuat putih
                />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-gray-900">
                  POS <span className="text-[#800000]">Panglima</span>
                </h1>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-600">
                  Panglima Roqiiqu Group
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden items-center gap-8 sm:flex">
              <a 
                href="#download" 
                className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#800000]"
              >
                Download
              </a>
              <a 
                href="#panduan" 
                className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#800000]"
              >
                Panduan Instalasi
              </a>
              {/* Tombol Akses Cepat */}
              <a 
                href="#download" 
                className="rounded-full bg-[#800000] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-maroon-900/20 transition-transform active:scale-95"
              >
                Dapatkan Aplikasi
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Content Wrapper */}
      <div className="mx-auto max-w-5xl space-y-12 py-12 px-6">
        
        {/* Section Download */}
        <section id="download" className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md">
          <DownloadSection />
        </section>

        {/* Section Panduan */}
        <section id="panduan" className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#800000] to-amber-500" />
          <GuideSection />
        </section>

      </div>

      {/* Footer - Lebih Elegan */}
      <footer className="mt-20 border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-1 w-12 rounded-full bg-amber-500" />
          </div>
          <p className="text-sm font-medium text-gray-900">
            &copy; 2026 Panglima Roqiiqu Group
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Aplikasi Point of Sales untuk efisiensi bisnis Anda.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#800000]" />
              Versi 1.0.0
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Stable Build
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
