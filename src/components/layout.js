import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

const Layout = ({ children, location }) => {

  let content;

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
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description 
              image
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { property: 'og:url', content: 'https://websitedesignnorthcarolina.com'},
              { property: 'og:type', content: 'website'},
              { property: 'og:title', content: "Matt's Portfolio"},
              { property: 'og:description', content: data.site.siteMetadata.description },
              { property: 'og:image', content: data.site.siteMetadata.image}
            ]}
          >
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout