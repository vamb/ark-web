import React from 'react'
import { Layout } from "antd";
import { withRouter } from 'react-router'
import Header from "./Header";
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

  console.log('LayoutWrapper isCurrentUrlExclude', isCurrentUrlExclude)

  let header = <Header />
  let sideMenu = <SideMenu />
  let mainBody = <Layout>{props.children}</Layout>
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