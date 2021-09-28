import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../../components/seo';
import DarkModeSwitch from '../../components/dark-mode-switch';
import Content from '../../components/content';
import Author from '../../components/author';
import HashTagBox from '../../components/hash-tag-box';
import PaginationBox from '../../components/pagination-box';
import { StaticImage } from 'gatsby-plugin-image';
import mainLogo from '../../images/main-logo.png';
import '../style.scss';

const description = '발전을 기록하는 프로그래머의 블로그';

export default (props) => {
  const { maxPage, currentPage, category } = props.pageContext;
  React.useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="landing-page">
      <Seo description={description} img={mainLogo} path="/"/>
      <div className="container-box">
        <div className="landing-page__switch">
          <DarkModeSwitch />
        </div>
        <div className="landing-page__title">
          <StaticImage
            src="../../images/main-logo-no-bg.png"
            width={180}
            quality={95}
            formats={['auto', 'webp', 'avif']}
            alt="blog logo"
            />
        </div>
        <div className="landing-page__author">
          <Author/>
        </div>
        <div className="landing-page__hash">
          <HashTagBox selected={props.pageContext.category}/>
        </div>
        <div className="landing-page__content">
          <Content postList={props.data.allMdx.edges}/>
        </div>
        <hr className="separator"/>
        <div className="landing-page__pagination">
          <PaginationBox maxPage={maxPage} currentPage={currentPage} paginationType={'category'} category={category}/>
        </div>
      </div>
    </div>
  )
};

export const pageQuery = graphql`
  query categoryQuery($skip: Int!, $limit: Int!, $category: String!) {
    allMdx(
      filter: {
        frontmatter: {
          category: {
            eq: $category
          },
          title: {
            regex: "/^((?!WIP).)*$/"
          }
        }
      },
      sort: {
        fields: frontmatter___date,
        order: DESC
      },
      limit: $limit,
      skip: $skip
    ) {
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
