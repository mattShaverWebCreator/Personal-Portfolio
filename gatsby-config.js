module.exports = {
  siteMetadata: {
    title: "Matt's Portfolio",
    author: "Matthew Shaver",
    description: "Matt Shaver is a Front End Developer with a passion for creating amazing UI/UX experiences.",
    image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/71803732_952924578395500_104562138462289920_o.jpg?_nc_cat=105&_nc_oc=AQkBMEZjLfn3YEb_qXXh3Sf8Asw1Uuw8kstQyJdH8RfdkEEMyQ6evAkFp71MAlH7vDY&_nc_ht=scontent-lga3-1.xx&oh=8f68b69b21f9d329f9e876b5ed365d8f&oe=5E36C8C5',
    url: 'https://websitedesignnorthcarolina.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Matts Portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/theBestFavicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: '1970d31a-f3ed-4127-b8af-ffd26c2e82c9',
        enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
