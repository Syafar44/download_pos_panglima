/**
 * Konfigurasi versi aplikasi POS Panglima
 * Update array ini ketika ada versi baru atau update
 */

export interface AppVersion {
  id: string;
  version: string;
  releaseDate: string;
  filename: string;
  size: string;
  changelog: string[];
  isLatest: boolean;
}

export const APP_VERSIONS: AppVersion[] = [
  {
    id: '1',
    version: '1.0.0',
    releaseDate: '01 April 2026',
    filename: 'pos-panglima-v1.0.0.apk',
    size: '52 MB',
    changelog: [
      'Pra Rilis: Versi 1.0.0',
      'Fitur: Manajemen Produk, Penjualan, Laporan Penjualan',
    ],
    isLatest: true,
  },
];

export const getLatestVersion = (): AppVersion => {
  const latest = APP_VERSIONS.find((v) => v.isLatest);
  return latest || APP_VERSIONS[APP_VERSIONS.length - 1];
};

export const getDownloadLink = (filename: string): string => {
  return `/apk/${filename}`;
};
