import React from 'react'

interface Props {
  src: string
}

const EmbedSlide = ({ src }: Props) => (
  <p className="EmbedSlide">
    <iframe src={src} width="576" height="420" scrolling="no" frameBorder="0" allowFullScreen></iframe>
  </p>
)

export default EmbedSlide
