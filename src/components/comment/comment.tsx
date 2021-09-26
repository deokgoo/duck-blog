import * as React from 'react';
import { createRef, useEffect } from 'react';

const Comment = () => {
  const commentRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const { GATSBY_GIT_REPO_URL, GATSBY_COMMENT_API_URL } = process.env;

    const $utterances = document.createElement('script');
    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'deokgoo/duck-blog',
      'issue-term': 'title',
      label: 'comment',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([k, v]) => {
      $utterances.setAttribute(k, v);
    });

    commentRef.current.appendChild($utterances);
  }, []);

  return (
    <div id="comment" ref={commentRef}/>
  );
}

export default Comment;
