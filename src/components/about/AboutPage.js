import React from 'react';

import {Link} from 'react-router';

class AboutPage extends React.Component{

  render(){
    return (
      <div className = "jumbotron">
        <h1>About</h1>
        <h4> This application was built with React and Redux!</h4>
        <Link to="/" className="btn btn-success btn-lg">Home Page</Link>
      </div>
    );
  }
}

export default AboutPage;
