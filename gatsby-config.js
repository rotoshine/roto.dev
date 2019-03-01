module.exports = {
  siteMetadata: {
    title: "ROTO - Software Engineer",
    author: "TaeHee Kim",
    description: "Roto's page",
    url: 'https://roto.dev',
    imageUrl: 'https://roto.dev/images/profile.jpg',
    keywords: 'ROTO\'s works, slides, resume, and more...'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-49604777-11",
      },
    },
  ],
}
