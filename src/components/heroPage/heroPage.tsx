import '../../styles/main.css'

const HeroPage = ()=>{
    return(
        <section className="mainHero">
                <h1 lang="en"  className="mainHeroTitle">pntools</h1>
                <p className="mainHeroDescription">criado para facilitar  o teste de apis e aplicativos usando dados que são frequentemente ultilizados em projetos</p>
                <a href="#mainToolsList" title="ir para a lista de conversores" className="mainHeroButton">ferramentas</a>
            </section>
    )
}
export default HeroPage