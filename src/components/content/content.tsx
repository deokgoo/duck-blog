import * as React from 'react';
import './content.scss';

const Content = ({postList}) => {
  const pageMove = (slug) => {
    window.location.href=`${slug}`;
  }

  const createBox = ({date, category, title, slug, description, hash}) => {
    return (
      <div className="content__box" key={title} onClick={() => pageMove(slug)}>
        <div className="content__box-date_category">
          <span className="content__box-date">{date}</span>
          <span className="content__box-category">{category}</span>
        </div>
        <div className="content__box-title">{title}</div>
        <div className="content__box-desc">
          {description}
        </div>
        {/* <div className="content__box-hash">{hash.map(x => `#${x} `)}</div> */}
      </div>
    )
  }

  return (
    <div className="content">
      <div className="content__menu">
      </div>
      <div className="content__post-list">
        {postList.map(x => createBox(x.node.frontmatter))}
      </div>
    </div>
  )
}

export default Content;
