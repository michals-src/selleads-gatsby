/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Selleads`,
    siteUrl: `https://www.selleads.pl`,
    description: `Pomożemy Ci przygotować ofertę, która spełni oczekiwania nawet najbardziej wymagających klientów, a algorytm wraz z upływem czasu zacznie pozycjonować Twoją ofertę coraz wyżej. Aż dojdzie do samej góry.`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/pages/homepage`,
    //     name: `homepage`
    //   }
    // },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@sections": "src/sections",
          "@pages": "src/pages",
          "@images": "src/assets/images",
          "@styles": "src/styles",
        },
        extensions: [
          "js", 'css'
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Selleads wings for your business',
        short_name: 'Selleads',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/assets/images/favicon.svg',
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-KSP5R6GWZB", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // here can you change the cookie name
          anonymize: true, // default
        },
        googleTagManager: {
          trackingId: "YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // // here can you change the cookie name
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "YOUR_FACEBOOK_PIXEL_ID", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // // here can you change the cookie name
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
  ],
}
