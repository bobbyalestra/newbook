import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import "./App.css"

import { AuthProvider } from './util/context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
  <AuthProvider>
    <Router>
    <Container>
<MenuBar />
    <Route exact path='/' component={Home}/>
    <AuthRoute exact path="login" component={Login}/>
    <AuthRoute exact path="register" component={Register}/>
</Container>
  </Router>
  </AuthProvider>
  );
}

export default App;
 