import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './antd.css';
import './App.css';
import { AgentPage, TagFilter } from './page';
// import AgentPage from "./page/Agent/AgentPage";

const App =()=> {
 return(
   <Router>
     <div>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/users">Users</Link>
           </li>
           <li>
             <Link to="/agentPage">Agent Page</Link>
           </li>
           <li>
             <Link to="/tagFilter">Tag Filter</Link>
           </li>
         </ul>
       </nav>

       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <Switch>
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
}

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
