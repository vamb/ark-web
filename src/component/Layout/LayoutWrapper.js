import React from 'react'
import { Layout } from "antd";
import { withRouter } from 'react-router'
import Header from "./Header";
import MainBody from "./MainBody";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import LayoutConstant from "./LayoutConstant";

const LayoutWrapper = props =>{
  console.log('LayoutWrapper props', props && props.location && props.location['pathname']? props.location['pathname']: 'null')
  let pathname = props.location['pathname']
  pathname = pathname? pathname: '/'

  let isCurrentUrlExclude = false
  if(LayoutConstant.EXCLUDE_LIST && LayoutConstant.EXCLUDE_LIST.length>0){
    isCurrentUrlExclude = LayoutConstant.EXCLUDE_LIST.includes(pathname)
  }

  let header = <Header />
  let sideMenu = <SideMenu />
  let mainBody = <MainBody>{props.children}</MainBody>
  let footer = <Footer />

  if(isCurrentUrlExclude){
    header = null;
    sideMenu = null;
    footer = null;
  }

  return(
    <Layout>
      {header}
      {sideMenu}
      {mainBody}
      {footer}
    </Layout>
  )
}
export default withRouter(LayoutWrapper)