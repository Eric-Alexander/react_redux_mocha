import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const VideoForm = ({video, onSave, onChange, allUsers, saving, errors}) => {
  return(
    <form>
      <h1>Manage Video</h1>
      <TextInput
        name="title"
        label="Title"
        value={video.title}
        onChange={onChange}
        error={errors.title}/>
      <SelectInput
        name="userId"
        label="User"
        value={video.userId}
        defaultOption="Select User"
        options={allUsers}
        onChange={onChange}
        error={errors.userId}/>
      <TextInput
        name="category"
        label="Category"
        value={video.category}
        onChange={onChange}
        error={errors.category}/>
      <TextInput
        name="length"
        label="Length"
        value={video.length}
        onChange={onChange}
        error={errors.length}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

VideoForm.propTypes = {
  video: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  allUsers: PropTypes.array,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default VideoForm;
