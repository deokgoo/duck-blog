import React from 'react';
import Seo from '../components/seo';
import Comment from '../components/comment'
import { Helmet } from 'react-helmet';
import './blogTemplate.scss';

export default function BlogTemplate({children, pageContext}) {
  const {
    title,
    description,
    date,
    slug,
  } = pageContext.frontmatter;

  const copyToClip = async () => {
    await navigator.clipboard.writeText(window.location);
    // after copy
  }

  return (
    <div className="blog-post">
      <div className="wrapper">
        {/* google ad */}
        <Helmet>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2038243209448310" crossorigin="anonymous"/>
        </Helmet>
        <Seo title={title} description={description} path={slug}/>

        <div className="blog-post__articles" role="link" tabIndex={0} onClick={_ => window.location.href='/'} onKeyPress={_ => window.location.href='/'}>
          <div className="btn">
            All Articles
          </div>
        </div>

        <div className="post-content">
          <h1 className="post-content__title">{title}</h1>
          <h2 className="post-content__date">({date})</h2>
          <div className="post-content__box">
            <div className="mdx-content">
              {children}
            </div>
          </div>
          <div className="blog-post__footer">
            <hr/>
            <Comment/>
          </div>
        </div>
      </div>
    </div>
  );
}
