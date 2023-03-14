import Header from './components/header'
import NavBar from './components/NavBar'
import './globals.css'
import Providers from './Providers'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header/>
        <NavBar/>
        {children}
        </Providers>
        </body>
        
    </html>
  )
}
