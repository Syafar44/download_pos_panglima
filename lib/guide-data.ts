/**
 * Data panduan penggunaan POS Panglima
 */

export interface GuideStep {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
  images: string[];
}

export const GUIDE_STEPS: GuideStep[] = [
  {
    number: 1,
    title: 'LOGIN',
    description: 'Buka aplikasi dan masukkan kredensial Anda',
    details: [
      'Buka aplikasi POS Panglima',
      'Masukkan Email Kasir & Kata Sandi',
      'Klik tombol "Masuk"',
    ],
    icon: '🔐',
    images: ['/POS-PANGLIMA/1.png'],
  },
  {
    number: 2,
    title: 'MULAI SHIFT',
    description: 'Inisialisasi shift kasir sebelum melayani pelanggan',
    details: [
      'Sistem otomatis menampilkan nama kasir & tanggal',
      'Pilih shift yang sesuai (Shift Pagi / Shift Siang)',
      'Isi modal awal (Cash) contoh: Rp 1.000.000',
      'Klik "Buka Kasir Sekarang"',
      'Konfirmasi shift yang dipilih, lalu klik "Mulai Shift"',
      'Jika jadwal shift sudah diambil, pilih shift lain atau hubungi supervisor',
    ],
    icon: '⏰',
    images: [
      '/POS-PANGLIMA/2.png',
      '/POS-PANGLIMA/5.png',
      '/POS-PANGLIMA/3.png',
      '/POS-PANGLIMA/6.png',
      '/POS-PANGLIMA/4.png',
    ],
  },
  {
    number: 3,
    title: 'HALAMAN PESANAN BARU',
    description: 'Lihat daftar produk dan kelola pesanan pelanggan',
    details: [
      'Tampil daftar produk dalam bentuk kartu berwarna',
      'Filter per kategori (AICE, Amplang, Bakpia Basah, Bakpia Kering, dll)',
      'Cari produk via ikon 🔍',
      'Pilih pelanggan di pojok kanan atas',
      'Lihat ringkasan pesanan real-time di panel kanan',
    ],
    icon: '🛒',
    images: [
      '/POS-PANGLIMA/7.png',
      '/POS-PANGLIMA/8.png',
      '/POS-PANGLIMA/9.png',
    ],
  },
  {
    number: 4,
    title: 'PILIH PRODUK & ATUR PESANAN',
    description: 'Tambahkan produk dan sesuaikan detail pesanan',
    details: [
      'Klik produk untuk membuka detail',
      'Atur kuantitas dengan tombol + / −',
      'Pilih varian jika ada (misal: Bakpia Basah Cokelat / Keju / Kacang)',
      'Beri diskon (Rp atau %) jika diperlukan',
      'Klik "Simpan" untuk menambahkan ke keranjang',
    ],
    icon: '📦',
    images: [
      '/POS-PANGLIMA/10.png',
      '/POS-PANGLIMA/11.png',
    ],
  },
  {
    number: 5,
    title: 'PROSES PEMBAYARAN',
    description: 'Finalisasi pembayaran dengan berbagai metode',
    details: [
      'Klik "Proses Pembayaran"',
      'Lihat ringkasan pesanan & total penerimaan',
      'Pilih metode Tunai: nominal uang (Rp 3.000, Rp 10.000, atau Custom)',
      'Pilih metode Non Tunai: QRIS, EDC BCA/BSI, QRIS BCA/BSI/BRI, Transfer BCA/BSI/BRI',
      'Pilih tipe pengiriman: Takeaway, Delivery, atau Compliment',
      'Jika Compliment, input keterangan alasan (wajib diisi)',
      'Klik "Selesaikan Pembayaran"',
      'Sistem menampilkan status Transaksi Berhasil & kembalian',
    ],
    icon: '💳',
    images: [
      '/POS-PANGLIMA/12.png',
      '/POS-PANGLIMA/13.png',
      '/POS-PANGLIMA/14.png',
      '/POS-PANGLIMA/15.png',
    ],
  },
  {
    number: 6,
    title: 'RIWAYAT PENJUALAN',
    description: 'Kelola dan lacak semua transaksi penjualan',
    details: [
      'Buka menu "Riwayat Penjualan" di sidebar',
      'Lihat semua transaksi dengan nomor POS, tanggal, nominal, metode bayar',
      'Klik transaksi untuk melihat detail lengkap (Informasi Penjualan & Pembayaran)',
      'Lihat riwayat penerimaan dan detail barang & jasa',
      'Opsi: Cetak Struk, Share, atau Hapus Struk',
    ],
    icon: '📊',
    images: [
      '/POS-PANGLIMA/16.png',
      '/POS-PANGLIMA/17.png',
      '/POS-PANGLIMA/18.png',
    ],
  },
  {
    number: 7,
    title: 'LAPORAN',
    description: 'Lihat ringkasan laporan outlet secara detail',
    details: [
      'Buka menu "Laporan" di sidebar',
      'Penerimaan Penjualan: total penerimaan & jumlah transaksi per metode (Cash/Tunai)',
      'Klik detail untuk melihat rincian transaksi per metode pembayaran',
      'Penjualan per Tipe Penjualan: ringkasan berdasarkan tipe (Takeaway, Delivery, dll)',
      'Penjualan Barang per Pelanggan: lihat transaksi per pelanggan',
      'Penjualan per Barang: lihat produk terlaris dan jumlah terjual',
    ],
    icon: '📈',
    images: [
      '/POS-PANGLIMA/19.png',
      '/POS-PANGLIMA/20.png',
      '/POS-PANGLIMA/21.png',
      '/POS-PANGLIMA/22.png',
      '/POS-PANGLIMA/23.png',
      '/POS-PANGLIMA/24.png',
    ],
  },
  {
    number: 8,
    title: 'INVENTORY - SURAT JALAN',
    description: 'Kelola pengiriman barang dari gudang',
    details: [
      'Buka menu "Inventory" → tab "Surat Jalan"',
      'Lihat daftar kiriman barang dengan status: Belum Diterima (oranye) / Diterima (hijau)',
      'Klik "Detail Transaksi" untuk melihat rincian surat jalan',
      'Periksa jumlah kirim vs jumlah realisasi tiap barang',
      'Jika ada selisih barang, isi alasan pada form yang muncul lalu "Simpan & Lanjutkan"',
      'Klik "Konfirmasi Terima Barang" untuk menyelesaikan penerimaan',
      'Notifikasi "Surat Jalan Menunggu Konfirmasi" muncul di halaman utama',
    ],
    icon: '📮',
    images: [
      '/POS-PANGLIMA/25.png',
      '/POS-PANGLIMA/26.png',
      '/POS-PANGLIMA/27.png',
      '/POS-PANGLIMA/28.png',
      '/POS-PANGLIMA/29.png',
      '/POS-PANGLIMA/30.png',
      '/POS-PANGLIMA/31.png',
      '/POS-PANGLIMA/32.png',
    ],
  },
  {
    number: 9,
    title: 'PENGATURAN',
    description: 'Konfigurasi profil dan perangkat',
    details: [
      'Buka menu "Pengaturan" di sidebar',
      'Profil Pengguna: lihat info outlet, departemen, nama perangkat, alamat IP & outlet terhubung',
      'Printer: lihat daftar printer Bluetooth yang tersedia',
      'Klik "Cari Ulang Printer" jika printer belum terdeteksi',
      'Klik "Keluar Perangkat" untuk logout dari perangkat',
    ],
    icon: '⚙️',
    images: [
      '/POS-PANGLIMA/33.png',
      '/POS-PANGLIMA/34.png',
      '/POS-PANGLIMA/35.png',
    ],
  },
  {
    number: 10,
    title: 'AKHIRI SHIFT',
    description: 'Tutup shift kasir dengan rekonsiliasi',
    details: [
      'Klik "Akhiri Shift" di sidebar',
      'Lihat ringkasan: nama kasir, waktu, total pendapatan sistem',
      'Isi total pendapatan aktual (Rp)',
      'Klik "Konfirmasi"',
      'Konfirmasi akhir: klik "Ya, Lanjutkan" untuk menutup shift',
    ],
    icon: '🏁',
    images: [
      '/POS-PANGLIMA/37.png',
      '/POS-PANGLIMA/38.png',
    ],
  },
];
