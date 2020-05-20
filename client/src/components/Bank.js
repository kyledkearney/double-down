import React, { Component } from 'react'

export default class Bank extends Component {
  constructor(){
    super();
    this.state ={users: []};
}
componentDidMount() {
       fetch('/users')
         .then(res => {
             console.log(res);
             return res.json()
          })
         .then(users => { 
             console.log(users); 
             this.setState({ users })
          });
      }
render() {
     return (
         <div className="App">
             <h1>Users</h1>
             {this.state.users.map(user =>
             <div key={user.id}>user: {user.name} Password: {user.password}</div>
           )}
         </div>
     );
 }
}
