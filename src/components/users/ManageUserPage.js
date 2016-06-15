import React, {PropTypes} from 'react';
import UserForm from './UserForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as userActions from '../../actions/userActions';

class ManageUserPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      user: Object.assign({}, props.user),
      errors: {},
      saving: false,
      dirty: false
    };

      this.updateUserState = this.updateUserState.bind(this);
      this.saveUser = this.saveUser.bind(this);
      this.routerWillLeave = this.routerWillLeave.bind(this);
    }
    componentDidMount() {
      this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    }

    componentWillReceiveProps(nextProps){
      if (this.props.user.id != nextProps.user.id){
        this.setState({user: Object.assign({}, nextProps.user)});
      }
    }
    routerWillLeave(nextLocation) {
      //need to fix this transition when save button clicked!
      if(this.state.dirty && !this.state.saving){
        return 'Leave without saving?';
      }
    }

    updateUserState(event){
      this.setState({dirty: true});
      const field = event.target.name;
      let user = this.state.user;
      user[field] = event.target.value;
      return this.setState({user: user});
    }
    userFormIsValid(){
      let formIsValid = true;
      let errors = {};
      if (this.state.user.firstName.length < 2 && this.state.user.lastName.length < 2){
        errors.title = 'First and Last Names must be at least 2 characters.';
        formIsValid = false;
      }
      this.setState({errors: errors});
      return formIsValid;
    }
    saveUser(event){
      event.preventDefault();
      if (!this.userFormIsValid()){
        return;
      }
      this.setState({saving: true});
      this.props.actions.saveUser(this.state.user)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false, dirty: false});
        });

    }
    redirect(){
      this.setState({saving: false});
      toastr.success("User saved!");
      this.context.router.push('/users');
    }
  render(){
    return(
      <div>
        <p>Test</p>
        <UserForm
          onChange={this.updateUserState}
          onSave={this.saveUser}
          user={this.state.user}
          errors={this.state.errors}
          saving={this.state.saving} />
      </div>
    );
  }
}
ManageUserPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
ManageUserPage.contextTypes = {
  router: PropTypes.object
};

function getUserById(users, id){
  const user = users.filter(user => user.id == id);
  if (user) return user[0]; //Note: .filter returns an array so grab the first in the array!
  return null;
}
function mapStateToProps(state, ownProps){
  const userId = ownProps.params.id; //params.id is direct grab from router path '/user/:id'
  let user = {id: '', firstName: '', lastName: ''};

  if (userId && state.users.length > 0){
    user = getUserById(state.users, userId);
  }

  return {
    user: user
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
