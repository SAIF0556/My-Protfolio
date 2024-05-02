import './styles/global.css'
import './app.css'
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
      <Parallax />
      <MyService />
      <Parallax />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
