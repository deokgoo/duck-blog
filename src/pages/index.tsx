import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import SideBar from '../components/side-bar';
import Content from '../components/content';
import './style.scss';

const IndexPage = ({location}) => (
  <Layout>
    <Seo title="duck blog" />
    <div className="index">
      <SideBar/>
      <Content location={location} />
    </div>
  </Layout>
)

export default IndexPage
