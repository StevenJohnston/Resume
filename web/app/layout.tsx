import 'tailwindcss/tailwind.css';
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='h-full'>
      <body className='h-full'>
        {children}
      </body>
    </html>
  )
}