
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'

function App() {

  return (
    <>
      <BrowserRouter basename='/landing_page/plantilla8/'>
        <Routes>
          <Route path="/" element={ <Inicio /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
