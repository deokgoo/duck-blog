import * as React from 'react';
import './pagination-box.scss';

interface Props {
  maxPage: number;
  currentPage: number;
  paginationType: PaginationType;
  category?: string;
}
export type PaginationType = 'blog' | 'category';

const PaginationBox = ({maxPage, currentPage, paginationType, category}: Props) => {
  const judgePaging = () => {
    const res: JSX.Element[] = [];

    if(maxPage < 4) {
      Array.from({length: maxPage}).forEach((_, x) => {
        let pageNumber;
        if(paginationType === 'blog') {
          pageNumber = !x ? <a className={x+1===currentPage?'active':''} href={`/`} key={x}>{x+1}</a> :
            <a className={x+1===currentPage?'active':''} href={`/blog/${x+1}`} key={x}>{x+1}</a>;
        } else {
          pageNumber = !x ? <a className={x+1===currentPage?'active':''} href={`/category/${category}`} key={x}>{x+1}</a> : <a className={x+1===currentPage?'active':''} href={`/category/${category}/${x+1}`} key={x}>{x+1}</a>
        }
        res.push(pageNumber);
      })
    } else {
      // TODO: 4이상일 경우
    }

    return res;
  }

  const movePage = (num: number) => {
    const nextPage = currentPage+num;
    if(paginationType === 'category' && !category) return;
    if(nextPage<1 || nextPage>maxPage) return;

    let uri = '';
    if(paginationType === 'blog') {
      uri = nextPage === 1 ? '/' : `/blog/${nextPage}`;
    } else {
      uri = nextPage === 1 ? `/category/${category}` :`/category/${category}/${nextPage}`;
    }

    window.location.href = uri;
  }

  return (
    <div className="pagination-box">
      <div className="previous" onClick={() => movePage(-1)}>&lt; Newer Posts</div>
      <div className="number-box">
        {judgePaging()}
      </div>
      <div className="next" onClick={() => movePage(1)}>Old Posts &gt;</div>
    </div>
  );
};

export default PaginationBox;
