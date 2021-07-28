import * as React from 'react';
import { Helmet } from 'react-helmet';
import { SeoProps } from './type';

const defaultMeta = [];
const blogTitle = 'duck blog';
const siteUrl = 'https://duck-blog.netlify.app';

const Seo = ({
  lang = 'kr',
  meta = [],
  author = 'deokgoo',
  title,
  img,
  path,
  description }: SeoProps) => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${siteUrl}${path}`} />
      </Helmet>
      <Helmet
        htmlAttributes={{ lang }}
        title={title??blogTitle}
        titleTemplate={title ? `%s | ${blogTitle}` : blogTitle}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title??blogTitle,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: img,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: title??blogTitle,
          },
          {
            name: `twitter:description`,
            content: description,
          },
          {
            name: `naver-site-verification`,
            content: `da893f74c3322cdabd86b8e116f4d0f88b3c0cbf`
          }
        ].concat(meta)}
      />
    </>
  )
}

export default Seo
