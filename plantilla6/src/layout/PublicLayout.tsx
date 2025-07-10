
import { Outlet } from 'react-router-dom'
import Header from '../components/estructura/Header'
import Footer from '../components/estructura/Footer'

export default function PublicLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
