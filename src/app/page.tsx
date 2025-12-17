'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Utensils, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users,
  ChefHat,
  Truck,
  Award,
  Star,
  CheckCircle
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                FIKI SAPUTRO UTOMO
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('home')}
                className={`font-medium transition-colors ${
                  activeTab === 'home' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Beranda
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`font-medium transition-colors ${
                  activeTab === 'about' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Tentang
              </button>
              <button 
                onClick={() => setActiveTab('services')}
                className={`font-medium transition-colors ${
                  activeTab === 'services' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`font-medium transition-colors ${
                  activeTab === 'contact' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Kontak
              </button>
            </div>

            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-100/50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2">
              <ChefHat className="w-4 h-4 mr-2" />
              Jasa Boga Profesional
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                FIKI SAPUTRO UTOMO
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Penyedia Jasa Boga Terpercaya untuk Berbagai Kebutuhan Anda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                0823-1059-8347
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
                Lihat Layanan
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-orange-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">1000+ Pelanggan</h3>
                  <p className="text-gray-600 text-sm">Puas dengan layanan kami</p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Berpengalaman</h3>
                  <p className="text-gray-600 text-sm">Tim profesional handal</p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Pengantaran</h3>
                  <p className="text-gray-600 text-sm">Tepat waktu & aman</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi jasa boga komprehensif untuk berbagai kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-orange-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Catering Harian</h3>
                <p className="text-gray-600 mb-6">Layanan pengadaan makanan harian untuk kantor, sekolah, dan instansi</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Menu variatif & bergizi
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Harga terjangkau
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pengantaran tepat waktu
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-orange-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Catering Acara</h3>
                <p className="text-gray-600 mb-6">Layanan katering untuk berbagai acara formal dan informal</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Menu prasmanan & buffet
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pelayanan profesional
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Peralatan lengkap
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-orange-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Paket Khusus</h3>
                <p className="text-gray-600 mb-6">Paket katering khusus untuk kebutuhan jangka panjang</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Kontrak bulanan/tahunan
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Harga khusus
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Menu custom
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Tentang FIKI SAPUTRO UTOMO
              </h2>
              <p className="text-xl text-gray-600">
                Profesional dalam penyediaan jasa boga terpercaya
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur border-orange-200">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">
                      Mengapa Memilih Kami?
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      FIKI SAPUTRO UTOMO adalah penyedia jasa boga profesional yang berkomitmen 
                      untuk memberikan layanan terbaik dalam penyediaan makanan berkualitas. 
                      Dengan pengalaman yang mumpuni dan tim yang handal, kami siap memenuhi 
                      berbagai kebutuhan katering Anda.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Kami melayani berbagai jenis kebutuhan jasa boga untuk periode tertentu, 
                      mulai dari catering harian, acara khusus, hingga kontrak jangka panjang 
                      untuk instansi dan perusahaan.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-3" />
                        <span className="text-gray-700">Kualitas makanan terjamin</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-3" />
                        <span className="text-gray-700">Pelayanan tepat waktu</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-3" />
                        <span className="text-gray-700">Harga kompetitif</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <Card className="border-orange-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-4 text-orange-600">Layanan Utama</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            Jasa Boga Periode Tertentu
                          </li>
                          <li className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            Catering Harian & Rutin
                          </li>
                          <li className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            Catering Acara Khusus
                          </li>
                          <li className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            Paket Kontrak Perusahaan
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-orange-200">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-4 text-orange-600">Area Layanan</h4>
                        <p className="text-gray-700">
                          Melayani wilayah Muara Enim dan sekitarnya dengan fokus utama di 
                          Kecamatan Lawang Kidul, Kabupaten Muara Enim, Provinsi Sumatera Selatan.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap melayani kebutuhan jasa boga Anda
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Informasi Kontak</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                        <p className="text-gray-600">
                          LINGGA, Desa/Kelurahan Lingga, Kec. Lawang Kidul, 
                          Kab. Muara Enim, Provinsi Sumatera Selatan
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                        <p className="text-gray-600">0823-1059-8347</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">fiki@saputrouromo.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                        <p className="text-gray-600">Senin - Sabtu: 06:00 - 20:00</p>
                        <p className="text-gray-600">Minggu: 07:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Kirim Pesan</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Jelaskan kebutuhan Anda"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3">
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">FIKI SAPUTRO UTOMO</span>
              </div>
              <p className="text-orange-100">
                Penyedia jasa boga profesional terpercaya untuk berbagai kebutuhan Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-orange-100">
                <li>Catering Harian</li>
                <li>Catering Acara</li>
                <li>Paket Khusus</li>
                <li>Kontrak Perusahaan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-orange-100">
                <li>0823-1059-8347</li>
                <li>Lingga, Lawang Kidul, Muara Enim</li>
                <li>Sumatera Selatan</li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-orange-400 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-100 mb-4 md:mb-0">
              © 2024 FIKI SAPUTRO UTOMO. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <a 
                href="/privacy"
                className="text-orange-100 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a 
                href="/terms"
                className="text-orange-100 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}