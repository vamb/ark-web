import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './antd.css';
import './App.css';
import { AgentPage, TagFilter, AgentProfile } from './page';
import { Button, Row, Col } from 'antd'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

const InnerStore = {}

InnerStore.innerStore = observable({
  chosen: 'home'
})

const { innerStore } = InnerStore

InnerStore.updateChosen = action((key)=>{
  innerStore.chosen = key
})

const App = observer(()=> {
 return(
   <Router>
     <div style={{padding: '20px 30px'}}>
       <nav>
         <Row style={{marginBottom: '20px'}}>
           <Col span={2}>
             <Link to="/">
               <Button
                 type={'home' === innerStore.chosen? 'primary': null}
                 onClick={()=>{
                   InnerStore.updateChosen('home')
                 }}
               >Home</Button>
             </Link>
           </Col>
           <Col span={2}>
             <Link to="/about">
               <Button
                 type={'about' === innerStore.chosen? 'primary': null}
                 onClick={()=>{
                   InnerStore.updateChosen('about')
                 }}
               >About</Button>
             </Link>
           </Col>
           <Col span={2}>
             <Link to="/users">
               <Button
                 type={'users' === innerStore.chosen? 'primary': null}
                 onClick={()=>{
                   InnerStore.updateChosen('users')
                 }}
               >Users</Button>
             </Link>
           </Col>
           <Col span={2}>
             <Link to="/agentPage">
               <Button
                 type={'agentPage' === innerStore.chosen? 'primary': null}
                 onClick={()=>{
                   InnerStore.updateChosen('agentPage')
                 }}
               >Agent Page</Button>
             </Link>
           </Col>
           <Col span={2}>
             <Link to="/tagFilter">
               <Button
                 type={'tagFilter' === innerStore.chosen? 'primary': null}
                 onClick={()=>{
                   InnerStore.updateChosen('tagFilter')
                 }}
               >Tag Filter</Button>
             </Link>
           </Col>
           <Col span={2}>
             <Link to="/AgentProfile">
               <Button
                 type={'AgentProfile' === innerStore.chosen? 'primary': null}
                 onClick={()=>{
                   InnerStore.updateChosen('AgentProfile')
                 }}
               >Agent Profile</Button>
             </Link>
           </Col>
         </Row>
       </nav>
        <hr/>
       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <Switch>
         <Route path={"/AgentProfile"}>
           <AgentProfile />
         </Route>
         <Route path="/tagFilter">
           <TagFilter />
         </Route>
         <Route path="/agentPage">
           <AgentPage />
         </Route>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/users">
           <Users />
         </Route>
         <Route path="/">
           <Home />
         </Route>
       </Switch>
     </div>
   </Router>
 )
})

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
