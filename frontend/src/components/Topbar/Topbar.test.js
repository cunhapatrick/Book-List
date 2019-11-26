import React from 'react';
import { shallow } from 'enzyme';
import Topbar from './Topbar';

describe('Testing Topbar Component', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Topbar
        handleFilter={() => {}}
        handleSearch={() => {}}
        loading={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});