import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('Testing List Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <List
        books={[{
          _id: 1,
          title: 'teste',
          author: 'teste',
        }]}
        handleDetalhes={() => {}}
      />
    );
  });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});