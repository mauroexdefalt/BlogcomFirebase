import React, { Component } from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import './global.css';
import Home from './components/home';
import Header from './components/header';
import firebase from './firebase';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Register from './components/register';
class  App extends Component {
  state = {
firebaseinitialized : false ,
  };
componentDidMount(){
firebase.isInitialized().then(resultado =>{
  //devolve usuario
this.setState({firebaseinitialized : resultado});
})  
}

  render(){
  return this.state.firebaseinitialized !== false ? (

   <BrowserRouter>
   <Header/>
   <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/dashboard' component={Dashboard}/>
     <Register exact path='/register' component={Register}/>
     
    </Switch>
   </BrowserRouter>
  ) : (
    <h1>carregando ...</h1>
  );
}
}
export default App;
