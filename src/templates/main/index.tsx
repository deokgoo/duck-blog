import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../../components/seo';
import DarkModeSwitch from '../../components/dark-mode-switch';
import PaginationBox from '../../components/pagination-box';
import Content from '../../components/content';
import Author from '../../components/author';
import HashTagBox from '../../components/hash-tag-box';
import mainLogo from '../../images/main-logo.png';
import mainLogoNoBG from '../../images/main-logo-no-bg.png';
import '../style.scss';

const description = '발전을 기록하는 프로그래머의 블로그';

export default (props) => {
  const { maxPage, currentPage } = props.pageContext;
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
          <img src={mainLogoNoBG} alt="logo" width="180" height="41.2"/>
        </div>
        <div className="landing-page__author">
          <Author/>
        </div>
        <div className="landing-page__hash">
          <HashTagBox selected="All"/>
        </div>
        <div className="landing-page__content">
          <Content postList={props.data.allMdx.edges}/>
        </div>
        <hr className="separator"/>
        <div className="landing-page__pagination">
          <PaginationBox maxPage={maxPage} currentPage={currentPage} paginationType={'blog'}/>
        </div>
      </div>
    </div>
  )
};

export const pageQuery = graphql`
  query pagination($skip: Int!, $limit: Int!) {
    allMdx(
      sort: {
        fields: frontmatter___date,
        order: DESC
      },
      filter: {
        frontmatter: {
          title: {
            regex: "/^((?!WIP).)*$/"
          }
        }
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
