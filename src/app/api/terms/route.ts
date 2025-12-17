import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const termsConditions = {
    title: "Syarat dan Ketentuan",
    companyName: "FIKI SAPUTRO UTOMO",
    lastUpdated: "20 November 2024",
    sections: [
      {
        title: "1. Penerimaan Syarat",
        content: [
          "Dengan menggunakan layanan jasa boga dari FIKI SAPUTRO UTOMO, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat ini, harap tidak menggunakan layanan kami."
        ]
      },
      {
        title: "2. Layanan Kami",
        content: [
          "FIKI SAPUTRO UTOMO menyediakan layanan jasa boga meliputi:",
          "• Penyediaan makanan untuk kebutuhan harian",
          "• Catering untuk acara khusus",
          "• Paket kontrak jangka panjang",
          "• Layanan pengantaran makanan",
          "• Konsultasi menu dan kebutuhan diet khusus"
        ]
      },
      {
        title: "3. Pemesanan dan Pembayaran",
        content: [
          "• Pemesanan harus dilakukan minimal 24 jam sebelum waktu pengantaran",
          "• Pembayaran dapat dilakukan secara tunai atau transfer",
          "• Pembayaran harus diselesaikan sebelum atau pada saat pengantaran",
          "• Pembatalan pesanan harus dilakukan minimal 12 jam sebelum waktu pengantaran",
          "• Denda pembatalan berlaku untuk pembatalan mendadak (50% dari total pesanan)"
        ]
      },
      {
        title: "4. Kualitas dan Keamanan Makanan",
        content: [
          "Kami berkomitmen untuk:",
          "• Menyediakan makanan yang higienis dan berkualitas",
          "• Menggunakan bahan-bahan segar dan halal",
          "• Mematuhi standar keamanan pangan",
          "• Menangani keluhan tentang kualitas makanan dengan serius"
        ]
      },
      {
        title: "5. Pengantaran",
        content: [
          "• Pengantaran dilakukan sesuai dengan jadwal yang disepakati",
          "• Biaya pengantaran dapat berlaku tergantung jarak",
          "• Kami tidak bertanggung jawab atas keterlambatan karena faktor di luar kendali kami",
          "• Penerima harus menandatangani bukti pengantaran"
        ]
      },
      {
        title: "6. Kebijakan Pengembalian",
        content: [
          "• Pengembalian dana hanya berlaku untuk:",
          "  - Makanan yang tidak sesuai pesanan",
          "  - Masalah kualitas yang terbukti",
          "• Pengembalian harus diajukan maksimal 2 jam setelah pengantaran",
          "• Keputusan pengembalian sepenuhnya menjadi wewenang manajemen"
        ]
      },
      {
        title: "7. Tanggung Jawab",
        content: [
          "FIKI SAPUTRO UTOMO tidak bertanggung jawab atas:",
          "• Alergi makanan yang tidak diinformasikan sebelumnya",
          "• Kerusakan makanan akibat penanganan yang salah setelah pengantaran",
          "• Keterlambatan akibat kondisi lalu lintas atau cuaca ekstrem"
        ]
      },
      {
        title: "8. Privasi",
        content: [
          "Informasi pribadi Anda akan dilindungi sesuai dengan Kebijakan Privasi kami. Kami tidak akan membagikan informasi Anda kepada pihak ketiga tanpa persetujuan Anda."
        ]
      },
      {
        title: "9. Perubahan Syarat dan Ketentuan",
        content: [
          "Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif setelah dipublikasikan di situs web kami."
        ]
      },
      {
        title: "10. Kontak",
        content: [
          "Untuk pertanyaan tentang syarat dan ketentuan ini, hubungi:",
          "FIKI SAPUTRO UTOMO",
          "Alamat: LINGGA, Desa/Kelurahan Lingga, Kec. Lawang Kidul, Kab. Muara Enim, Provinsi Sumatera Selatan",
          "Telepon: 0823-1059-8347",
          "Email: info@fiki-saputrouromo.com"
        ]
      }
    ]
  }

  return NextResponse.json(termsConditions)
}