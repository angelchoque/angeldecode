import Header from "../components/header/Header"
import About from "components/About/About"
import Experience from "components/experience/Experience"
import Services from "components/services/Services"
import Portfolio from "components/portfolio/Portfolio"
import Testimonials from "components/testimonials/Testimonials"
import Contact from "components/contact/Contact"
import Footer from "components/footer/Footer"
import Nav from "components/nav/Nav"
export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Nav />
    </>
  )
}
