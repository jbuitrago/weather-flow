import React from 'react';
import {shallow } from 'enzyme';
import Current from '../../components/Current';
describe('Current', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Current debug />);
    expect(component).toMatchSnapshot();
  });
});
