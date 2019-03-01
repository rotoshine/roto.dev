import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

interface Props {
  children: string | ReactNode,
  location?: any,
}
const Layout = ({ children, location }: Props) => {

  let content: ReactNode | null = null

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              url
              imageUrl
              keywords
            }
          }
        }
      `}
      render={({ site: { siteMetadata: { title, url, imageUrl, description, keywords } }}) => (
        <>
          <Helmet
            title={title}
            link={[
              { rel: 'canonical', href: url }
            ]}
            meta={[
              { name: 'viewport', content: 'initial-scale=1.0, width=device-width' },
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },              
              { name: 'og:title', content: title },
              { name: 'og:type', content: 'website' },
              { name: 'og:url', content: url },
              { name: 'og:image', content: imageUrl },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: '@winterwolf0412' },
              { name: 'twitter:creator', content: '@winterwolf0412' },
              { name: 'twitter:title', content: title },
              { name: 'twitter:image', content: 'summary_large_image' },
              { name: 'twitter:desciprtion', content: description },
            ]}
          >
            <html lang="ko" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

export default Layout
