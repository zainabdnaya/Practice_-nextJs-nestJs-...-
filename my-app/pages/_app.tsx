import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout, Menu, Breadcrumb } from 'antd';
import _table from './tables';
import _card from './card';

function MyApp({ Component, pageProps }: AppProps) {
  const { Header, Content, Footer } = Layout;
  return (
    <div id="container">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div id="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content id="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div id="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div id="table">
              <_table />
              <_card />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  )
}

export default MyApp
