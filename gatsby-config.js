/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "GCMS",
        // This is the field under which it's accessible
        fieldName: "gcms",
        // URL to query from
        url: "https://api-euwest.graphcms.com/v1/ck6g2t16q4ctt01fm32c0dm84/master"
      },
    },
  ],

}

