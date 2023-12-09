import './styles/header.css'
import './styles/main.css'
import './styles/toolBox.css'
import './styles/default.css'
import './styles/footer.css'
import Header from './components/header/header'
import HeroPage from './components/heroPage/heroPage'
import Footer from './components/footer/footer'
import ToolBoxComponent from './components/ToolBox/toolBoxComponent'
import Main from './components/main/main'

function App() {
  return (
    <>
      <Header/>
        <Main>
           <HeroPage/>
            <section className="mainTools">
                <div className="mainToolsHero"><h2 className="mainToolsHeroTitle">ferramentas</h2></div>
                <ToolBoxComponent />
            </section>
        </Main>
        <Footer/>
    </>
  )
}

export default App
