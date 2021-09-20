import * as React from 'react';
import './hash-tag-box.scss';
import { graphql, useStaticQuery } from 'gatsby';

const postHashQuery = graphql`
  query hashQuery {
    allMdx {
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`;

const HashTagBox = ({location}) => {
  const data = useStaticQuery(postHashQuery);
  const { nodes } = data.allMdx;

  const getHash = (): string[] => {
    const hashList = new Set<string>();
    nodes.forEach(x => {
      hashList.add(x.frontmatter.category);
    });

    return Array.from(hashList);
  }

  const renderHash = () => {
    const hashList: string[] = getHash();
    const category = 'All';

    return ['All', ...hashList].map(x =>
      <li className={`hash-btn ${x==='All'?'active':''}`} role="tab" key={x}>
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
