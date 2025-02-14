import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ogImage from '../../assets/images/carloskvasir.png';

const Seo = ({ pageTitle, description, keywords, meta }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          user
          siteUrl
        }
      }
    }
  `);

  const title = pageTitle || site.siteMetadata.title;
  const siteUrl = site.siteMetadata.siteUrl;
  const twitterUser = site.siteMetadata.user;

  return (
    <>
      <title>
        {pageTitle ? `${pageTitle} | ${site.siteMetadata.title}` : site.siteMetadata.title}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={`@${twitterUser}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="750" />
      <meta property="og:image:height" content="750" />
      {meta && meta.map((m, i) => <meta key={i} {...m} />)}
    </>
  );
};

export default Seo;
