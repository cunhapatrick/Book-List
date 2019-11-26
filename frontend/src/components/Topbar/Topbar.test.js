import React from 'react';
import { shallow } from 'enzyme';
import Topbar from './Topbar';

describe('Testing Topbar Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Topbar
        handleFilter={() => {}}
        handleSearch={() => {}}
        loading={true}
      />
    );
  });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});