import React from 'react';
import { shallow } from 'enzyme';
import Filterbar from './Filterbar';

describe('Testing Filterbar Component', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Filterbar
        iData={1998}
        eData={2019}
        total={10}
        handleIData={() => {}}
        handleEData={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});