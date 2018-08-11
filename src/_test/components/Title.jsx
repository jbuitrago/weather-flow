import React from 'react';
import {shallow } from 'enzyme';
import Title from '../../components/Title';
describe('Title', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Title debug />);
    expect(component).toMatchSnapshot();
  });
});
