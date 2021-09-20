import * as React from 'react';
import Seo from '../components/seo';
import DarkModeSwitch from '../components/dark-mode-switch';
import Content from '../components/content';
import Author from '../components/author';
import HashTagBox from '../components/hash-tag-box';
import mainLogo from '../images/main-logo.png';
import mainLogoNoBG from '../images/main-logo-no-bg.png';
import './style.scss';

const description = '발전을 기록하는 프로그래머의 블로그';

const LandingPage = ({location}) => (
  <div className="landing-page">
    <Seo description={description} img={mainLogo} path="/"/>
    <div className="page-container">
      <div className="switch-wrapper">
        <DarkModeSwitch />
      </div>
      <div className="title-wrapper">
        <img src={mainLogoNoBG} alt="logo"/>
      </div>
      <div className="author-wrapper">
        <Author/>
      </div>
      <div className="hash-wrapper">
        <HashTagBox location={location}/>
      </div>
      <div className="header-wrapper">

      </div>
      <div className="content-wrapper">
        <Content location={location} />
      </div>
    </div>
  </div>
)

export default LandingPage
