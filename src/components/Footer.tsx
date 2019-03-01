import React from 'react'

interface Props {
  timeout: boolean,
}

const Footer = ({ timeout }: Props) => (
  <footer id="footer" style={timeout ? {display: 'none'} : {}}>
    <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
  </footer>
)

export default Footer
