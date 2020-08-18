import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



let firebaseConfig = {
    apiKey: "AIzaSyCCTGV6SB2_CTN9jbFVwdqbaV5cvn4QusA",
    authDomain: "reactapp-7f3be.firebaseapp.com",
    databaseURL: "https://reactapp-7f3be.firebaseio.com",
    projectId: "reactapp-7f3be",
    storageBucket: "reactapp-7f3be.appspot.com",
    messagingSenderId: "933492464782",
    appId: "1:933492464782:web:14bdb9c1618303e9f07ddf",
    measurementId: "G-JH35E7LM6B"
  };

class firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.app = app.database();
    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email,password)
    }
    async register(nome, email , password){
        await app.auth().createUserWithEmailAndPassword(email,password) ;

        const uid = app.auth().currentUser.uid ;

        return app.database().ref('usuarios').child(uid).set({
            nome : nome 
        })
    }

    logout(){
        return app.auth().signOut();
    }


    isInitialized(){
    return new Promise(resolve =>{
        app.auth().onAuthStateChanged(resolve);
    })   
    }

    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }


    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;

        }
        const uid = app.auth().currentUser.uid;
        console.log(uid + 'id usuario');
        await app.database().ref('usuarios').child(uid).once('value').then(callback);
    }

}

export default new firebase();