import React from 'react';
import Seo from '../components/Seo';
import './blogTemplate.scss';

export default function Template({children, pageContext}) {
  const {
    title, 
    description, 
    date 
  } = pageContext.frontmatter;

  return (
    <div className="blog-post-container">
      <Seo title={title} description={description} lang="ko"/>
      <div className="blog-post-articles" role="link" tabIndex={0} onClick={_ => window.location.href='/'} onKeyPress={_ => window.location.href='/'}>
        <span>
          All Articles
        </span>
      </div>
      <div className="blog-post">
        <h1 className="blog-post__title">{title}</h1>
        <small className="blog-post__date">({date})</small>
        {children}
        <div className="blog-post-footer">
        <hr/>
      </div>
      </div>
    </div>
  );
}
