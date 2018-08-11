import React from 'react';
import {shallow } from 'enzyme';
import Forecast from '../../components/Forecast';
describe('Forecast', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Forecast debug />);
    expect(component).toMatchSnapshot();
  });
});
