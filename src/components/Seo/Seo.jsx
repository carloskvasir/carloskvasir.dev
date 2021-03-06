import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import ogImage from '../../assets/images/carloskvasir.png';

const siteQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        user
        siteUrl
      }
    }
  }
`;

const Seo = ({ pageTitle, description, keywords, meta }) => (
  <StaticQuery
    query={siteQuery}
    render={data => (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={pageTitle || data.site.siteMetadata.title}
        titleTemplate={pageTitle && `%s | ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:creator', content: `@${data.site.siteMetadata.user}` },
          { name: 'twitter:title', content: pageTitle },
          { name: 'twitter:description', content: description },
          { property: 'og:title', content: pageTitle },
          { property: 'og:description', content: description },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: data.site.siteMetadata.siteUrl },
          { property: 'og:image', content: `${data.site.siteMetadata.siteUrl}${ogImage}` },
          { property: 'og:image:alt', content: description },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'og:image:width', content: '750' },
          { property: 'og:image:height', content: '750' }
        ].concat(meta)}
      />
    )}
  />
);

Seo.propTypes = {
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
};
Seo.defaultProps = {
  pageTitle: null,
  description: '',
  keywords: '',
  meta: []
};

export default Seo;
