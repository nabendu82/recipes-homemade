module.exports = {
  siteMetadata: {
    title: `Recipes Homemade`,
    description: `This site contains details of homemade recipes made by Shikha Biswas.`,
    author: `Nabendu Biswas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require('./firebase.json'),
        types: [
          {
            type: 'Recipe',
            collection: 'recipes',
            map: doc => ({
              name: doc.name,
              summary: doc.summary,
              link: doc.link,
              cook___NODE: doc.cook.id
            }),
          },
          {
            type: 'Cook',
            collection: 'cooks',
            map: doc => ({
              name: doc.name,
            }),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
