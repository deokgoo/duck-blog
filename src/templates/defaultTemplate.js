import React from 'react';
import Seo from '../components/seo';
import './blogTemplate.scss';

export default function BlogTemplate({children, pageContext}) {
  const {
    title,
    description,
    date
  } = pageContext.frontmatter;

  return (
    <div className="blog-post-container">
      <div className="blog-post-wrapper">
        <Seo title={title} description={description} />
        <div className="blog-post-articles" role="link" tabIndex={0} onClick={_ => window.location.href='/'} onKeyPress={_ => window.location.href='/'}>
          <div className="blog-post-articles__btn">
            All Articles
          </div>
        </div>
        <div className="blog-post-content">
          <h1 className="blog-post-content__title">{title}</h1>
          <h2 className="blog-post-content__date">({date})</h2>
          <div className="blog-post-content__content">
            {children}
          </div>
          <div className="blog-post-footer">
            <hr/>
          </div>
        </div>
      </div>
    </div>
  );
}
