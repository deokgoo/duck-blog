import * as React from 'react';
import './hash-tag-box.scss';
import { graphql, useStaticQuery } from 'gatsby';

const postHashQuery = graphql`
  query hashQuery {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`;

const HashTagBox = ({selected}) => {
  const data = useStaticQuery(postHashQuery);

  const getHash = (): string[] => {
    return data.allMdx.distinct;
  }

  const hrefCategory = (category) => {
    let location = `/category/${category}`;
    if(category === 'All') {
      location = `/`;
    }
    window.location.href = location;
  }

  const renderHash = () => {
    const hashList: string[] = getHash();

    return ['All', ...hashList].map(x =>
      <li className={`hash-btn ${x===selected?'active':''}`} role="tab" key={x} onClick={() => hrefCategory(x)}>
        {x}
      </li>
    );
  }

  return (
    <ul className="hash-tag-box" role="tablist">
      {renderHash()}
    </ul>
  )
}



export default HashTagBox;
