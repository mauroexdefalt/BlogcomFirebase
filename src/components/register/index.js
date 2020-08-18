import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './register.css';



class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''


        };

   this.register = this.register.bind(this);
   this.onregister = this.onregister.bind(this);

    }
  register(e){
      e.preventDefault();
      this.onregister();
      



  }
onregister = async() =>{
try{
const {nome , email , password} = this.state;

await firebase.register(nome , email , password);
this.props.history.replace('/dashboard');

}catch(error){
alert(error.message +'erro aqui');
}
}


    render() {
        return (
            <div>
                 <h1 className='register-h1'>Novo usuario</h1>
                 <form id='register' onSubmit={this.register}>
                    <label>Nome : </label>
                    <input type='text' placeholder='Digite seu Nome' autoFocus autoComplete='off' value={this.state.nome} onChange={(e)=>this.setState({nome : e.target.value})}/> 
                    <label>Email : </label>
                    <input type='text' placeholder='Digite seu Email' autoComplete='off' value={this.state.email} onChange={(e)=>this.setState({email : e.target.value})}/> 
                    <label>Senha : </label>
                    <input type='text' placeholder='Digite sua senha' autoComplete='off' value={this.state.password} onChange={(e)=>this.setState({password : e.target.value})}/> 
                   <button type='submit' >Registrar</button>
                   {this.state.nome}
                   {this.state.email}
                   {this.state.password}
                 </form>
            </div>
        );
    }
}


export default withRouter(Register);