const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footerBrand">
            <img src="/images/brand.webp" alt="logo usada por petrus noleto em seu perfil e projetos pessoais" className="footerBrandImage" />
                <h4 className="footerBrandName">petrus noleto</h4>
            </div>
            <ul className="footerList">
                <li className="footerListItem"><a href="/" title="ir para o inicio da pagina"  className="footerListItemLink">inicio</a></li>
                <li className="footerListItem"><a href="#mainToolsList" title="ir para a lista de conversores" className="footerListItemLink" >ferramentas</a></li>
            </ul>
            <ul className="footerList">
                <li className="footerListItem"><a href="https://www.instagram.com/petrusnoleto/" title="ir para o instagram de petrus noleto" target="_blank" className="footerListItemLink">instagram</a></li>
                <li className="footerListItem"><a href="https://www.linkedin.com/in/petrusnoleto/" title="ir para o linkedin de petrus noleto" className="footerListItemLink" target="_blank">linkedin</a></li>
                <li className="footerListItem"><a href="https://github.com/PetrusNoleto" title="ir para o github de petrus noleto" className="footerListItemLink" target="_blank">github</a></li>
            </ul>
        </footer>
    )
}
export default Footer