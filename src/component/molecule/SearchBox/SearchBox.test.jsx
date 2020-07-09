import React from "react";
import { shallow } from "enzyme";
import SearchBox, { InputBox } from "./SearchBox";

describe("SearchBox", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<SearchBox onSearch={() => {}} />);
    expect(wrapper).toBeTruthy();
  });

  it("Should call onSearch with text", () => {
    const onSearch = jest.fn();
    const wrapper = shallow(<SearchBox onSearch={onSearch} />);
    const inputBox = wrapper.find(InputBox);

    inputBox.simulate("change", { target: { value: "Hello" } });

    wrapper.simulate("submit", { preventDefault: () => {} });

    expect(onSearch).toHaveBeenCalledWith("Hello");
  });

  it("Should match snapshot", () => {
    const wrapper = shallow(<SearchBox onSearch={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
