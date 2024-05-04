import './app.scss'
import Hero from './Components/Hero/Hero'
import Parallax from './Components/Parallax/Parallax'
import MyService from './Components/MyService/MyService'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NavBar from './Components/NavBar/Navbar'

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section id="MyService">
        <Parallax type="services" />
      </section>
      <section>
        <MyService />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
