import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const siteQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const Seo = ({ pageTitle }) => (
    <StaticQuery
        query={siteQuery}
        render={data => (
            <Helmet
                title={pageTitle || data.site.siteMetadata.title}
                titleTemplate={pageTitle && `%s | ${data.site.siteMetadata.title}`}
            />
        )}
    />
);

Seo.propTypes = {
    pageTitle: PropTypes.string
};
Seo.defaultProps = {
    pageTitle: null
};

export default Seo;
