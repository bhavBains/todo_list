import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './ItemsList';
import { shallow } from 'enzyme';

describe("<ItemsList />", () => {
  it('Adds new item', () => {
    const input = shallow(<ItemsList />);
    expect(input.find('input').length).toEqual(1);  
  });
});

