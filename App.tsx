import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import Hobbies from './pages/Hobbies'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Layout>
  )
}
