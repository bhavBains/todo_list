// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const add = (num1, num2) => num1 + num2

it("adds two number", () => {
  expect(add(1,2)).toBe(3)
})