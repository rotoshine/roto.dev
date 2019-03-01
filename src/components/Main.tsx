import React from 'react'

import EmbedSlide from './EmbedSlide'

import work from '../images/work.png'

interface Props {
  isArticleVisible: boolean,  
  timeout: boolean,
  articleTimeout: boolean,
  article: string,
  setWrapperRef: (node: any) => void,
  onCloseArticle: () => void,
}

class Main extends React.Component<Props> {
  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={work} alt="" /></span>
          <p>coming soon...</p>
          {close}
        </article>

        <article id="slides" className={`${this.props.article === 'slides' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Slides</h2>
          <EmbedSlide src="//slides.com/rotoshine/react-js-live-service/embed" />
          <EmbedSlide src="//slides.com/rotoshine/e2e-testfromnightwatch-js/embed" />
          <EmbedSlide src="//slides.com/rotoshine/hello-electron/embed" />
          <EmbedSlide src="//slides.com/rotoshine/hello-react-js/embed" /> 
          <EmbedSlide src="//slides.com/rotoshine/try-react-native-to-web-developer/embed" /> 
          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <p>coming soon...</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li><a href="https://github.com/rotoshine" className="fab fa-github fa-3x"></a></li>
            <li><a href="https://twitter.com/winterwolf0412" className="fab fa-twitter fa-3x"></a></li>
            <li><a href="https://facebook.com/rotoshine" className="fab fa-facebook fa-3x"></a></li>
            <li><a href="https://instagram.com/rotoshine" className="fab fa-instagram fa-3x"></a></li>
            <li><a href="https://www.linkedin.com/in/rotoshine/" className="fab fa-linkedin fa-3x"></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

export default Main