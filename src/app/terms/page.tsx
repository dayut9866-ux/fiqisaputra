'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, Home } from 'lucide-react'

interface TermsSection {
  title: string
  content: string[]
}

interface TermsData {
  title: string
  companyName: string
  lastUpdated: string
  sections: TermsSection[]
}

export default function TermsPage() {
  const [termsData, setTermsData] = useState<TermsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTermsData()
  }, [])

  const fetchTermsData = async () => {
    try {
      const response = await fetch('/api/terms')
      const data = await response.json()
      setTermsData(data)
    } catch (error) {
      console.error('Error fetching terms data:', error)
    } finally {
      setLoading(false)
    }
  }

  const goBack = () => {
    window.history.back()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat syarat dan ketentuan...</p>
        </div>
      </div>
    )
  }

  if (!termsData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Terjadi kesalahan saat memuat data</p>
          <Button onClick={goBack} className="bg-gradient-to-r from-orange-500 to-red-600">
            Kembali
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={goBack}
                className="text-gray-600 hover:text-orange-600"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-800">Syarat & Ketentuan</span>
              </div>
            </div>
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              size="sm"
              className="border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              <Home className="w-4 h-4 mr-2" />
              Beranda
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <Card className="mb-8 border-orange-200 bg-white/80 backdrop-blur">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {termsData.title}
              </CardTitle>
              <p className="text-xl text-gray-600 mt-2">{termsData.companyName}</p>
              <p className="text-sm text-gray-500">Terakhir diperbarui: {termsData.lastUpdated}</p>
            </CardHeader>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-6">
            {termsData.sections.map((section, index) => (
              <Card key={index} className="border-orange-200 bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer Actions */}
          <Card className="mt-8 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Pertanyaan tentang Syarat & Ketentuan?
              </h3>
              <p className="text-gray-600 mb-6">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan kami, jangan ragu untuk menghubungi kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  <FileText className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
                <Button 
                  onClick={() => window.location.href = '/privacy'}
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  Lihat Kebijakan Privasi
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-orange-100 mb-2">
            © 2024 {termsData.companyName}. Hak Cipta Dilindungi.
          </p>
          <p className="text-orange-200 text-sm">
            Syarat dan Ketentuan ini berlaku untuk semua layanan yang kami sediakan.
          </p>
        </div>
      </footer>
    </div>
  )
}