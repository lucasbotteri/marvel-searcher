import React from "react";
import { shallow } from "enzyme";
import { faStar as SolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as RegularStar } from "@fortawesome/free-regular-svg-icons";
import Star, { StarIcon } from "./Star";

describe("SearchBox", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<Star onClick={() => {}} />);
    expect(wrapper).toBeTruthy();
  });

  it("Should render solid star", () => {
    const wrapper = shallow(<Star onClick={() => {}} isSolid />);
    expect(wrapper.find(StarIcon).prop("icon")).toBe(SolidStar);
  });

  it("Should render regular star", () => {
    const wrapper = shallow(<Star onClick={() => {}} isSolid={false} />);
    expect(wrapper.find(StarIcon).prop("icon")).toBe(RegularStar);
  });

  it("Should match snapshot", () => {
    const wrapper = shallow(<Star onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
