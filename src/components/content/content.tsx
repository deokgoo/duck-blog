import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './content.scss';

const postListQuery = graphql`
  query pageQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            category
            slug
            date
            thumbnail
            description
            hash
          }
        }
      }
    }
  }
`;

const Content = ({location}) => {
  const data = useStaticQuery(postListQuery);
  const { edges } = data.allMdx;

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
        <div className="content__box-hash">{hash.map(x => `#${x} `)}</div>
      </div>
    )
  }
  const getHashTagsFromPath = () => {
    const params = location.search;
    if(!params) return;
    const hashTagParam = params.split('&').filter(x => /^\??hash_tag$/.test(x.split('=')[0]));
    if(!hashTagParam.length) return;
    const hashTags = hashTagParam[0].split('=');
    if(!hashTags) return;
    const encodedHashTags = decodeURI(hashTags[1]);
    return encodedHashTags.split(' ');
  }
  const createHashTagsBox = (arr: string[]) => {
    if(!arr) return;
    return arr.reduce((prev, cur) => prev + `<a href="./?hash_tag=${cur}" style="margin-right: 1rem">#${cur}</a>`, '');
  }
  const filtertedContent = () => {
    return edges.map(x => createBox(x.node.frontmatter));
  }
  useEffect(() => {
    setTimeout(() => {
      const arr = getHashTagsFromPath();
      if(!arr || !arr.length) return;
      const hashTitle = document.querySelector('.content__menu__hash');
      hashTitle.innerHTML = createHashTagsBox(arr);
    }, 500)
  }, [])
  return (
    <div className="content">
      <div className="content__menu">
      </div>
      <div className="content__post-list">
        {filtertedContent()}
      </div>
    </div>
  )
}

export default Content;
