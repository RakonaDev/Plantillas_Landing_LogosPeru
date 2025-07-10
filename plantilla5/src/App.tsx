import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import Inicio from './pages/Inicio'

function App() {
  
  return (
    <>
      <BrowserRouter basename='/landing_page/plantilla11/'>
        <Routes>
          <Route path='/' element={ <PublicLayout /> }>
            <Route index element={ <Inicio /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
