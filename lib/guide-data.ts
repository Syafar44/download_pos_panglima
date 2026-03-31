/**
 * Data panduan penggunaan POS Panglima
 */

export interface GuideStep {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export const GUIDE_STEPS: GuideStep[] = [
  {
    number: 1,
    title: 'LOGIN',
    description: 'Buka aplikasi dan masukkan kredensial Anda',
    details: [
      'Buka aplikasi POS Panglima',
      'Masukkan Email & Kata Sandi',
      'Klik tombol "Masuk"',
    ],
    icon: '🔐',
  },
  {
    number: 2,
    title: 'MULAI SHIFT',
    description: 'Inisialisasi shift kasir sebelum melayani pelanggan',
    details: [
      'Sistem otomatis menampilkan nama kasir & tanggal',
      'Pilih shift yang sesuai',
      'Isi modal awal (cash/uang tunai awal)',
      'Klik "Buka Kasir Sekarang"',
    ],
    icon: '⏰',
  },
  {
    number: 3,
    title: 'HALAMAN PESANAN BARU',
    description: 'Lihat daftar produk dan kelola pesanan pelanggan',
    details: [
      'Tampil daftar produk dalam bentuk kartu berwarna',
      'Filter per kategori atau cari via ikon 🔍',
      'Pilih pelanggan di pojok kanan atas',
      'Lihat ringkasan pesanan real-time',
    ],
    icon: '🛒',
  },
  {
    number: 4,
    title: 'PILIH PRODUK & ATUR PESANAN',
    description: 'Tambahkan produk dan sesuaikan detail pesanan',
    details: [
      'Klik produk untuk membuka detail',
      'Atur kuantitas dengan tombol + / −',
      'Pilih varian jika ada (Bakpia Basah Cokelat / Keju / Kacang)',
      'Beri diskon (Rp atau %)',
      'Klik "Simpan"',
    ],
    icon: '📦',
  },
  {
    number: 5,
    title: 'PROSES PEMBAYARAN',
    description: 'Finalisasi pembayaran dengan berbagai metode',
    details: [
      'Klik "Proses Pembayaran"',
      'Lihat ringkasan pesanan',
      'Pilih metode: Tunai atau Non Tunai',
      'Pilih tipe pengiriman: Takeaway, Delivery, atau Compliment',
      'Jika Compliment, input keterangan alasan',
      'Klik "Selesaikan Pembayaran"',
    ],
    icon: '💳',
  },
  {
    number: 6,
    title: 'RIWAYAT PENJUALAN',
    description: 'Kelola dan lacak semua transaksi penjualan',
    details: [
      'Buka menu "Riwayat Penjualan"',
      'Lihat semua transaksi dengan nomor POS, tanggal, nominal, metode bayar',
      'Klik transaksi untuk melihat detail lengkap',
      'Opsi: Cetak Struk atau Share',
    ],
    icon: '📊',
  },
  {
    number: 7,
    title: 'INVENTORY - SURAT JALAN',
    description: 'Kelola pengiriman barang dari gudang',
    details: [
      'Buka menu "Inventory" → tab "Surat Jalan"',
      'Lihat daftar kiriman barang (status: Belum Diterima / Diterima)',
      'Klik "Detail Transaksi"',
      'Periksa jumlah realisasi barang',
      'Klik "Konfirmasi Terima Barang"',
    ],
    icon: '📮',
  },
  {
    number: 8,
    title: 'PENGATURAN',
    description: 'Konfigurasi profil dan perangkat',
    details: [
      'Buka menu "Pengaturan"',
      'Profil Pengguna: lihat info outlet, departemen, perangkat & IP',
      'Printer: hubungkan printer Bluetooth untuk cetak struk',
      'Klik "Cari Ulang Printer" jika belum terdeteksi',
    ],
    icon: '⚙️',
  },
  {
    number: 9,
    title: 'AKHIRI SHIFT',
    description: 'Tutup shift kasir dengan rekonsiliasi',
    details: [
      'Klik "Akhiri Shift" di sidebar',
      'Lihat ringkasan: nama kasir, waktu, total sistem',
      'Isi total pendapatan aktual',
      'Klik "Konfirmasi"',
    ],
    icon: '🏁',
  },
];
