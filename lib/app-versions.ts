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
    version: '1.1.6',
    releaseDate: '09 April 2026',
    filename: 'pos-panglima-v1.1.6.apk',
    size: '55 MB',
    changelog: [
      'Rilis: Versi 1.1.6',
      'Perbaikan: bug minor, Crash/black screen versi 2',
    ],
    isLatest: true,
  }
];

export const getLatestVersion = (): AppVersion => {
  const latest = APP_VERSIONS.find((v) => v.isLatest);
  return latest || APP_VERSIONS[APP_VERSIONS.length - 1];
};

export const getDownloadLink = (filename: string): string => {
  return `/apk/${filename}`;
};
