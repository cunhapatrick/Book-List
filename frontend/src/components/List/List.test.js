import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('Testing List Component', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <List
        books={[{
          _id: 1,
          title: 'teste',
          author: 'teste',
        }]}
        handleDetalhes={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});