import { useEffect, useState } from "react"
import Boost from "./compenents/Boost"
import Footer from "./compenents/Footer"
import Header from "./compenents/Header"
import HeroSection from "./compenents/HeroSection"
import LinkSection from "./compenents/LinkSection"
import Statistics from "./compenents/Statistics"


function App() {
  const [menu, setMenu] = useState(false)
  const [link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!link) setError(true);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenu(false)
      }
    }
    window.addEventListener("resize",handleResize)
    return ()=>{
      window.removeEventListener("resize",handleResize)
    }

  }, [menu])




  return (
    <>
      <>
        <Header
          menu={menu}
          setMenu={setMenu}
        />
        <HeroSection />
        <LinkSection
          link={link}
          error={error}
          setLink={setLink}
          handleSubmit={handleSubmit}
        />
        <Statistics />
        <Boost />
        <Footer />

      </>
    </>
  )
}

export default App
