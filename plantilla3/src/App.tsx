import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import PublicLayout from './layout/PublicLayout'

function App() {
  const routerBasename = import.meta.env.VITE_BASE_PATH || '/'

  return (
    <>
      <BrowserRouter basename={routerBasename}>
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
