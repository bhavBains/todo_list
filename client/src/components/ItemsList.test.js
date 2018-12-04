import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import ItemsList from "./ItemsList";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() })

describe("ItemsList Component", () => {
  test("it renders...", () => {
    const wrapper = shallow(<ItemsList />);

    expect(wrapper.exists()).toBe(true);
  });

  test("when form is submitted, event is cancelled ", () => {
    const wrapper = shallow(<ItemsList />)
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    })
  });
  
});