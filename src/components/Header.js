import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
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
                <li><a href="#" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('slides')}}>Slides</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('resume')}}>RESUME</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="https://idiots.band" target="_blank">Band<i className="fas fa-external-link-alt" /></a></li>
                <li><a href="https://blog.roto.codes" target="_blank">Blog<i className="fas fa-external-link-alt" /></a></li>
                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
