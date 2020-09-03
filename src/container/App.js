import React from 'react';
// import {connect} from 'react-redux'
import '../assets/css/App.css';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
import routes from '../router/index';
function App() {
  return (
    <Router>
      <header className="title">
        <Link to='/'>首页</Link>
        <Link to='/login'>登录</Link>
        <Link to='/about'>关于</Link>
      </header>

      {
        routes.map( (route,key)=>{
          if(route.exact) {
            return <Route key={key} exact path="{route.path}" component={route.component}/>;
          }else {
            return <Route key={key} path={route.path} component={route.component}/>
          }
        })
      }

    </Router>
  );
}

export default App;
