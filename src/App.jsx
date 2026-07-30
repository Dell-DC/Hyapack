import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import MultiUseGuide from './pages/MultiUseGuide.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/multi-use-guide" element={<MultiUseGuide />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
