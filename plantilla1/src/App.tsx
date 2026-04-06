import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'

function App() {
  const routerBasename = import.meta.env.VITE_BASE_PATH || '/'

  return (
    <>
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route path='/' element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
