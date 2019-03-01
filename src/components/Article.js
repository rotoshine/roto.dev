import React from 'react'

const Article = ({ id, article, title, children }) => (
  <article id={id} className={`${this.props.article === id ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">{title}</h2>
    {children}>
  </article>
)

export default Article
