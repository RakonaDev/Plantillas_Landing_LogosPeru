import { Outlet } from "react-router-dom";
// import Header from "../components/estructura/Header";
import Footer from "../components/estructura/Footer";
import HeaderClaude from "../components/estructura/HeaderClaude";


export default function PublicLayout() {
  return (
    <div>
      {/* <Header /> */}
      <HeaderClaude />
      <Outlet />
      <Footer />
    </div>
  )
}
