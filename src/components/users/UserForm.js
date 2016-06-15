import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';


const UserForm = ({user, onSave, onChange, saving, errors}) => {

    return(
        <form>
          <h1>Manage User!</h1>
          <TextInput
            name="firstName"
            label="First Name"
            value={user.firstName}
            onChange={onChange}
            error={errors.title}/>
          <TextInput
            name="lastName"
            label="Last Name"
            value={user.lastName}
            onChange={onChange}
            error={errors.title}/>
          <input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={onSave}/>
        </form>
    );
  };

  UserForm.propTypes = {
    user: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
  };

export default UserForm;
