import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

import configureStore from 'redux-mock-store';
const mockStore = configureStore();

const initialState = {
  books: {
    data: {
      docs: [
        {
          _id: 1,
          title: 'teste',
        }
      ],
      total: 5,
    },
    loading: true,
  },
  searchBooksRequest: () => {},
};

let store;
let wrapper;

describe('Testing Home Component', () => {

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Home store={store} />,
    );
  })

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});