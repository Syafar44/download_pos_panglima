/**
 * Utility functions untuk UI
 */

/**
 * Format file size dari bytes ke readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';

  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Get relative date string
 */
export function getRelativeDate(dateString: string): string {
  // Parse format: "15 Maret 2024"
  const months: { [key: string]: number } = {
    Januari: 0,
    Februari: 1,
    Maret: 2,
    April: 3,
    Mei: 4,
    Juni: 5,
    Juli: 6,
    Agustus: 7,
    September: 8,
    Oktober: 9,
    November: 10,
    Desember: 11,
  };

  const parts = dateString.split(' ');
  if (parts.length !== 3) return dateString;

  const date = new Date(parseInt(parts[2]), months[parts[1]], parseInt(parts[0]));
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hari ini';
  if (diffDays === 1) return 'Kemarin';
  if (diffDays < 7) return `${diffDays} hari yang lalu`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu yang lalu`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan yang lalu`;

  return `${Math.floor(diffDays / 365)} tahun yang lalu`;
}

/**
 * Get version badge color
 */
export function getVersionBadgeVariant(
  versionString: string
): 'default' | 'secondary' | 'destructive' | 'outline' {
  const [major, minor] = versionString.split('.').map(Number);

  // Latest = primary color (default)
  // Recent (0.x away) = secondary
  // Old = muted

  if (major === 1 && minor >= 2) return 'default';
  if (major === 1 && minor === 1) return 'secondary';
  return 'outline';
}

/**
 * Check if version is recent (within 3 months)
 */
export function isRecentVersion(dateString: string): boolean {
  const months: { [key: string]: number } = {
    Januari: 0,
    Februari: 1,
    Maret: 2,
    April: 3,
    Mei: 4,
    Juni: 5,
    Juli: 6,
    Agustus: 7,
    September: 8,
    Oktober: 9,
    November: 10,
    Desember: 11,
  };

  const parts = dateString.split(' ');
  if (parts.length !== 3) return false;

  const date = new Date(parseInt(parts[2]), months[parts[1]], parseInt(parts[0]));
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays <= 90; // 3 months
}

/**
 * Generate changelog display text
 */
export function formatChangelogPoint(text: string): string {
  // Add icons based on keywords
  if (text.toLowerCase().includes('fix')) return '🔧 ' + text;
  if (text.toLowerCase().includes('fitur') || text.toLowerCase().includes('feature'))
    return '✨ ' + text;
  if (text.toLowerCase().includes('performance') || text.toLowerCase().includes('improvement'))
    return '⚡ ' + text;
  if (text.toLowerCase().includes('bug')) return '🐛 ' + text;
  if (text.toLowerCase().includes('security')) return '🔒 ' + text;

  return '✓ ' + text;
}
