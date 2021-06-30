import * as React from 'react';
import { Helmet } from 'react-helmet';
import { SeoProps } from './type';

const defaultMeta = [];
const blogTitle = 'duck blog';

const Seo = ({
  lang = 'kr',
  meta = [],
  author = 'deokgoo',
  title,
  description }: SeoProps) => {
  return (
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
          content: title,
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
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
