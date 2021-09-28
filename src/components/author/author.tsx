import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import config, { LinkConfig } from '../../config';

import icons from '../icons';
import './author.scss';

const Author = () => {
  const linkIconRender = () => {
    const iconKeys: (keyof LinkConfig)[] = [
      'mail',
      'github',
      'linkedin',
      'facebook',
      'instagram',
      'twitter',
      'telegram',
    ]
    return iconKeys.map(x => (
      config.link[x] ?
        (<li className="contact__item" key={x}>
          <a
            className="contact__item__link"
            href={x==='mail'?`mailto:${config.link[x]}`:config.link[x]}
            rel="noopener noreferrer"
            target="_blank">
            {icons.contact[x]}
          </a>
        </li>) : ''
    ))

  }
  return (
    <div className="author">
      <div className="container">
        <div className="avatar-wrapper">
          <div style={{height: '80px', width: '80px', borderRadius: '50%', overflow: 'hidden'}}>
            <StaticImage
              className="avatar"
              src={'../../images/avatar.jpeg'}
              width={80}
              quality={95}
              formats={['auto', 'webp', 'avif']}
              style={{borderRadius: '50%'}}
              alt="github avatar"
            />
          </div>
        </div>
        <div className="description">
          <div className="name">{config.author}</div>
          <div className="description">{config.description}</div>
          <div className="contact">
            <ul className="contact__list">
              {linkIconRender()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
