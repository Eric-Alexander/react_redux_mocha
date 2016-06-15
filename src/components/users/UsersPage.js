import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';
import {browserHistory} from 'react-router';

class UsersPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
  }
  userRow(user, idx) {
    return <div key={idx}>{user.id}</div>;
  }
  redirectToAddUserPage(){
    browserHistory.push('/user');
  }
  render(){
    const {users} = this.props;
    return (
      <div className = "jumbotron">
        <h1>Users:</h1>
        <UserList users={users}/>
        <input type="submit"
          value="Add User"
          className="btn btn-primary"
          onClick={this.redirectToAddUserPage}/>

      </div>
    );
  }
}
UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//Redux and connect functions
function mapStateToProps(state, ownProps){
  return {
    users: state.users
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
