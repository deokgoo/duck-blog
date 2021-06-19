import * as React from 'react';
import Seo from '../components/seo';
import SideBar from '../components/side-bar';
import Content from '../components/content';
import './style.scss';

const description = '발전을 기록하는 프로그래머의 블로그';

const LandingPage = ({location}) => (
  <div className='landing-page'>
    <Seo description={description} />
    <div className="index">
      <SideBar/>
      <Content location={location} />
    </div>
  </div>
)

export default LandingPage