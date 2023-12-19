import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import ParticlesComponent from '@/components/ParticlesComponent'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ["100", "200", "300", "500", "700", "900"], subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tap-creator.com'),
  title: 'Chaiwirat Thammawutikul, Full Stack Developer, Programmer, Freelancer',
  description: 'Full Stack Developer with 7+ years of experience in designing captivating user interfaces, optimizing web functionality, and improving workflow efficiencies.',
  openGraph: {
    title: 'Chaiwirat Thammawutikul',
    description: 'Full Stack Developer with 7+ years of experience in designing captivating user interfaces, optimizing web functionality, and improving workflow efficiencies.',
    url: 'https://tap-creator.com',
    siteName: 'Tap Creator',
    images: [
      {
        url: 'https://tap-creator.com/assets/tap-photo.webp',
        width: 256,
        height: 256,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
        <Analytics />
        <ParticlesComponent />
      </body>
    </html>
  )
}
