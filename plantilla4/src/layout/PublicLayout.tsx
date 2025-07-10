
import { Outlet } from 'react-router-dom'
// import Header from '../components/estructura/Header'
import Footer from '../components/estructura/Footer'
import Headerv0 from '../components/estructura/HeaderV0'

export default function PublicLayout() {
  return (
    <div>
      <Headerv0 />
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  )
}
