import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import bg from './assets/images/bg/background-star.jpg';
import About from './pages/about/index.js';
import Admin from './pages/admin/';
// import AdminEditor from './pages/admin/editor';
import Home from './pages/home/';
import Index from './pages/Index/Index';
import './pages/Index/Index.scss';

const style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}
// const [state] =useState
function App(props) {
  { console.log('pp', location.pathname) }
  return (
    <div
      className="App"
      style={location.pathname == "/" ? style : null}
    >
      <Router>
        <Route
          component={Index}
          exact
          path="/"
        />
        <Route
          component={Home}
          path="/home"
        />
        <Route
          component={About}
          path="/about"
        />
        <Route
          component={Admin}
          path="/admin"
        />
        {/* <Route
          component={AdminEditor}
          path='/admin/editor'
        /> */}
      </Router>
    </div>
  )
}
// hot(module)(App)
export default App
