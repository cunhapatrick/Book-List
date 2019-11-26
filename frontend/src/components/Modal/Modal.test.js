import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Testing Modal Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal
        closeModal={() => {}}
        show={true}
        data={{
          title: 'teste',
          dimensions: [10, 5, 8]
        }}
      />
    );
  });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});