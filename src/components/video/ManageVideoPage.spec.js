import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageVideoPage} from './ManageVideoPage';

describe('Manage Video Page', () => {
  it('sets error message when leaving title blank on save', () => {
    const props = {
      users: [],
      actions: {saveVideo: () => {return Promise.resolve(); }},
      video: {id: '', watchHref: '', title: '', userId: '', length: '', category: ''}
    };
    const wrapper = mount(<ManageVideoPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 4 characters.');

  });
});
