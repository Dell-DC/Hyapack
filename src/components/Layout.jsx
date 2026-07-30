import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
