import * as React from 'react';
import './content.scss';

const Content = ({postList}) => {
  const pageMove = (slug) => {
    window.location.href=`${slug}`;
  }

  const createBox = ({date, category, title, slug, description, hash}) => {
    return (
      <div className="content-card__box" key={title} onClick={() => pageMove(slug)}>
        <div className="date-and-category">
          <span className="content-card__box-date">{date}</span>
          <span className="content-card__box-category">{category}</span>
        </div>
        <div className="content-card__box-title">{title}</div>
        <div className="content-card__box-desc">
          {description}
        </div>
      </div>
    )
  }

  return (
    <div className="content-card">
      <div className="content-card__menu">
      </div>
      <div className="content-card__post-list">
        {postList.map(x => createBox(x.node.frontmatter))}
      </div>
    </div>
  )
}

export default Content;
