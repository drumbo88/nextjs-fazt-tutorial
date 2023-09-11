import Navbar from '../components/Navbar'
import { Roboto } from "next/font/google"
import "./globals.css"

export const metadata = {
    title: 'Mi tienda en Next-JS',
    description: 'Descripción de la página principal de mi tienda'
}

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    styles: ["italic", "normal"],
    subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>NEXT-JS</title></head>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
