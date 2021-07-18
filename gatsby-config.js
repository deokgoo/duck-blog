const siteUrl = process.env.URL || `https://www.example.com`

module.exports = {
  siteMetadata: {
    siteUrl,
    author: 'deokgoo',
    title: 'duck blog',
    description: 'tech blog',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-preset-env')({
            stage: 0
          })
        ]
      }
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136405885-2',
        head: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => allPages,
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
      __key: 'posts',
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve('./src/templates/defaultTemplate.js'),
          default: require.resolve('./src/templates/defaultTemplate.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'vscode',
              editable: false,
              lineNumbers: false,
            }
          },
        ],
      },
    },
  ],
};
