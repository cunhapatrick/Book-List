import React from 'react';
import { shallow } from 'enzyme';
import Filterbar from './Filterbar';

describe('Testing Filterbar Component', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Filterbar
        iData={1998}
        eData={2019}
        total={10}
        handleIData={() => {}}
        handleEData={() => {}}
      />
    );
  })

  it('should render properly', () => {

    expect(wrapper).toMatchSnapshot();
  });
});