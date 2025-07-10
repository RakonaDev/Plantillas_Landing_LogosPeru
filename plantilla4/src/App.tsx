import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PublicLayout from './layout/PublicLayout'
import Inicio from './pages/Inicio'

function App() {
  

  return (
    <>
      <BrowserRouter basename='/landing_page/plantilla10/'>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={ <Inicio /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
