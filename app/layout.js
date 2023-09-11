import Navbar from '../components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>NEXT-JS</title></head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
