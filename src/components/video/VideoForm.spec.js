import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import VideoForm from './VideoForm';

function setup(saving){
  const props = {
    video: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  return shallow(<VideoForm {...props} />);
}

it('renders form and h1', () => {
  const wrapper = setup(false);
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h1').text()).toEqual('Manage Video');
});

it('save button is labeled "Save" when NOT saving', () => {
  const wrapper = setup(false);
  expect(wrapper.find('input').props().value).toBe('Save');
});

it('save button is labeled "Saving..." when saving', () => {
  const wrapper = setup(true);
  expect(wrapper.find('input').props().value).toBe('Saving...');
});
