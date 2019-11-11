module.exports = {
  siteMetadata: {
    title: `An example to learn how to source data form WordPress`,
    subtitle: `Sourcing data from WordPress`
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `host.mildronize.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        excludedRoutes: [
          "/wp/v2/users/me",
          "/acf/v2/options",
          "/wp/v2/settings"
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ]
};
