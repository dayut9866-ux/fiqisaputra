import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const privacyPolicy = {
    title: "Kebijakan Privasi",
    companyName: "FIKI SAPUTRO UTOMO",
    lastUpdated: "20 November 2024",
    sections: [
      {
        title: "1. Informasi yang Kami Kumpulkan",
        content: [
          "Kami dapat mengumpulkan informasi pribadi dari Anda seperti:",
          "• Nama lengkap dan informasi kontak (nomor telepon, email)",
          "• Alamat pengiriman",
          "• Informasi tentang preferensi makanan dan kebutuhan diet khusus",
          "• Informasi pembayaran dan penagihan",
          "• Riwayat pesanan dan preferensi layanan"
        ]
      },
      {
        title: "2. Penggunaan Informasi",
        content: [
          "Informasi yang kami kumpulkan digunakan untuk:",
          "• Menyediakan layanan jasa boga yang Anda minta",
          "• Memproses pesanan dan pengiriman",
          "• Mengkomunikasikan informasi tentang pesanan Anda",
          "• Meningkatkan kualitas layanan kami",
          "• Mengirimkan informasi promosi dan penawaran khusus (dengan persetujuan Anda)"
        ]
      },
      {
        title: "3. Perlindungan Data",
        content: [
          "Kami berkomitmen untuk melindungi informasi pribadi Anda dengan:",
          "• Menggunakan teknologi keamanan yang sesuai",
          "• Membatasi akses ke informasi pribadi hanya untuk karyawan yang berwenang",
          "• Tidak membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan",
          "• Mematuhi hukum dan regulasi yang berlaku tentang perlindungan data"
        ]
      },
      {
        title: "4. Cookies dan Teknologi Pelacakan",
        content: [
          "Situs web kami dapat menggunakan cookies untuk:",
          "• Mengingat preferensi Anda",
          "• Menganalisis penggunaan situs web",
          "• Menyediakan konten yang relevan",
          "• Meningkatkan pengalaman pengguna"
        ]
      },
      {
        title: "5. Hak Anda",
        content: [
          "Anda memiliki hak untuk:",
          "• Mengakses informasi pribadi yang kami simpan tentang Anda",
          "• Memperbaiki informasi yang tidak akurat",
          "• Meminta penghapusan informasi pribadi Anda",
          "• Menolak pemasaran langsung dari kami"
        ]
      },
      {
        title: "6. Kontak Kami",
        content: [
          "Jika Anda memiliki pertanyaan tentang kebijakan privasi kami, silakan hubungi:",
          "FIKI SAPUTRO UTOMO",
          "Alamat: LINGGA, Desa/Kelurahan Lingga, Kec. Lawang Kidul, Kab. Muara Enim, Provinsi Sumatera Selatan",
          "Telepon: 0823-1059-8347",
          "Email: info@fiki-saputrouromo.com"
        ]
      }
    ]
  }

  return NextResponse.json(privacyPolicy)
}