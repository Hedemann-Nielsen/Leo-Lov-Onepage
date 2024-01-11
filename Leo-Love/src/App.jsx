import { Route, Routes } from 'react-router-dom'
import { Fallback } from './pages/Fallback/Fallback'
import { Home } from './pages/Home/Home'
import './App.scss'

function App() {

  return (
    <>
<Routes>
  <Route index element={<Home />} />
  <Route path="*" element={<Fallback />} />
</Routes>
    </>
  )
}

export default App
