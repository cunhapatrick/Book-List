import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Testing Modal Component', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Modal
        closeModal={() => {}}
        show={true}
        data={{
          title: 'teste',
          dimensions: [10, 5, 8]
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});