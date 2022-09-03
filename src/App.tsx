
import { BackTop, Layout } from 'antd';
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHeader from './components/common/PageHeader';
import PageSubHeader from './components/common/PageSubHeader';
import { InlineStylesModel } from './models/InlineStylesModel';
import { MainRoutes } from './routes/MainRoutes';

const { Header, Content } = Layout;
const styles: InlineStylesModel = {
  layout: {
    height: '100vh'
  },
  header: {
    lineHeight: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    padding: window.innerWidth < 2000 ? '20px 58px' : window.innerWidth > 2001 && window.innerWidth < 2600 ? '20px' : '20px 18px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 1920,
    alignSelf: 'center',
    width: '100%'
  },
  somethingWrong: {
    textAlign: 'center',
    height: '100vh'
  }
};

export const App = (): JSX.Element => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <React.StrictMode>
      <Layout style={styles.layout}>
        <BackTop />
        <Header style={styles.header}>
          <PageHeader />
        </Header>
        {pathname !== '/about' && pathname !== '/profile' ? <PageSubHeader /> : null}
        <Content style={styles.content}>
          <MainRoutes  />
        </Content>
      </Layout>
    </React.StrictMode>
  );
};

