import React from 'react'

interface Props {
  timeout: boolean,
  onOpenArticle: (article: string) => void,
}
const Header = ({ timeout, onOpenArticle }: Props) => (
    <header id="header" style={timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="fab fa-js fa-4x"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>ROTO</h1>
                <p>Software Engineer, Band Idiots Bassist, Cat Lover.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => {onOpenArticle('work')}}>Work</a></li>
                <li><a href="#" onClick={() => {onOpenArticle('slides')}}>Slides</a></li>
                <li><a href="#" onClick={() => {onOpenArticle('resume')}}>RESUME</a></li>
                <li><a href="#" onClick={() => {onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="https://idiots.band" target="_blank">Band<i className="fas fa-external-link-alt" /></a></li>
                <li><a href="https://blog.roto.codes" target="_blank">Blog<i className="fas fa-external-link-alt" /></a></li>
                
            </ul>
        </nav>
    </header>
)

export default Header
