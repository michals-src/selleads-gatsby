/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/pages/homepage`,
    //     name: `homepage`
    //   }
    // },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@sections": "src/sections",
          "@pages": "src/pages",
          "@images": "src/images",
          "@styles": "src/styles",
        },
        extensions: [
          "js", 'css'
        ],
      }
    }
  ],
}
