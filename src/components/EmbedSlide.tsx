import React from 'react'

import './EmbedSlide.scss'

interface Props {
  src: string
}

const EmbedSlide = ({ src }: Props) => (
  <p className="EmbedSlide">
    <iframe src={src} scrolling="no" frameBorder="0" allowFullScreen></iframe>
  </p>
)

export default EmbedSlide
