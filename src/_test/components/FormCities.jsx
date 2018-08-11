import React from 'react';
import {shallow } from 'enzyme';
import FormCities from '../../components/FormCities';
describe('FormCities', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FormCities debug />);
    expect(component).toMatchSnapshot();
  });
});
