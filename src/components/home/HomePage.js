import React from 'react';

import {Link} from 'react-router';

class HomePage extends React.Component{

  render(){
    return (
      <div className = 'jumbotron'>
        <h1>My Home Page</h1>
        <Link to="about" className="btn btn-success btn-lg">Learn More!</Link>
      </div>
    );
  }
}

export default HomePage;
