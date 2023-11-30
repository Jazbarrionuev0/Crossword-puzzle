import '@/styles/index.css'
import { Poppins } from 'next/font/google'
import { Irish_Grover } from 'next/font/google'

export const metadata = {
  title: 'Crossword Puzzle',
  description: 'An app done with love',
}

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500'], subsets: ['latin'] })
const irish = Irish_Grover({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={irish.className}>{children}</body>
    </html>
  )
}
