import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TDSaúde',
  description: 'Um app para cuidar da sua saúde',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster position="bottom-right" />
        </AuthProvider>
      </body>
    </html>
  )
}