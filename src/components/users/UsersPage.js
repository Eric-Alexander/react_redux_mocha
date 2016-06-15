import React from 'react';
import { Link, IndexLink } from 'react-router';
import mockUserApi from ''

class UsersPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }
  render(){
    return(
      <div>
        <h1> List of Users: </h1>
        <h2> Add a User <Link to="/user" activeClassName="active">Here</Link>.</h2>
      </div>
    );
  }
}
export default UsersPage;
