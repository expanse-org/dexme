import React from 'react';
import { Layout, Menu, Breadcrumb,Alert} from 'antd';
import GlobalFooter from './Footer';
import Navbar from './Navbar';
import '../index.css';
const { Header, Content, Footer } = Layout;

const HomeLayout = (props)=>{
  const { children,location } = props
  const ifLight = location && location.pathname && location.pathname.indexOf('light') > -1
  return (
    <Layout className="layout home-layout">
      <Header className={`${ifLight ? 'header-light' : 'header-dark'} position-fixed w-100`} style={{zIndex:'100'}}>
        <Navbar {...props}/>
      </Header>
      <Content className="">
        <div className="">
          {children}
        </div>
      </Content>
      <div className="footer-expex">
        <div className="container">
          <div className="footer-body">
            <p>© Copyright 2018 expex.io Powered by <span>EXPEX</span>.</p>
            <div className="-right">
              <a href="https://expanse.tech/"><img width="110px" src={require("../assets/images/exp-footer.png")} /></a>
              <a href=""><img src={require("../assets/images/facebook.svg")} /></a>
              <a href=""><img src={require("../assets/images/feed.svg")} /></a>
              <a href=""><img src={require("../assets/images/twitter.svg")} /></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const MainLayout = (props)=>{
  const { children,location } = props
  return (
    <Layout className="layout main-layout">
      <Header className="bg-white">
        <Navbar {...props} />
      </Header>
      <Content className="" style={{background:'#F8F8F8'}}>
        <div className="">
          {children}
        </div>
      </Content>
      <div className="footer-expex">
        <div className="container">
          <div className="footer-body">
            <p>© Copyright 2018 expex.io Powered by <span>EXPEX</span>.</p>
            <div className="-right">
              <a href="https://expanse.tech/"><img width="110px" src={require("../assets/images/exp-footer.png")} /></a>
              <a href=""><img src={require("../assets/images/facebook.svg")} /></a>
              <a href=""><img src={require("../assets/images/feed.svg")} /></a>
              <a href=""><img src={require("../assets/images/twitter.svg")} /></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default function DefaultLayout(props){
  const { location } = props
  const pathname = location && location.pathname
  const bool = pathname.indexOf('/home') > -1  || pathname === '/'
  if(bool){
    return <HomeLayout {...props} />
  }else{
    return <MainLayout {...props} />
  }
}
