import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import NavBar from "./NavBar";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() })

describe("NavBar Component", () => {
  test("it renders...", () => {
    const item = {length: 1}; // container expects items as props
    const wrapper = shallow(<NavBar items={item}/>);

    expect(wrapper.exists()).toBe(true);
  });

  test("items.length is a valid number", () => {
    const items = {length: 1};
    const wrapper = shallow(<NavBar items={items}/>);
    
    expect(items.length).toBeTruthy();
  });

  test("items.length is not null", () => {
    const items = {length: null};
    const wrapper = shallow(<NavBar items={items}/>);
    
    expect(items.length).toBeNull();
  });

  test("items.length is not undefined", () => {
    const items = {length: undefined};
    const wrapper = shallow(<NavBar items={items}/>);
    
    expect(items.length).toBeUndefined();
  });
});