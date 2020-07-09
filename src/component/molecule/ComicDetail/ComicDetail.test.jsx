import React from "react";
import { shallow } from "enzyme";
import ComicDetail from "./ComicDetail";

const comic = {
  id: 70718,
  title: "The Amazing Spider-Man (2018) #22",
  published: "2019-05-29T00:00:00-0400",
  thumbnail:
    "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5ce401142935b/portrait_uncanny.jpg",
  description:
    "HUNTED AFTERMATH! The fallout from “HUNTED” continues to loom, and much of Peter’s life is called into question. What is left of Spider-Man after living through the harrowing hunt?! ",
  writer: "Nick Spencer",
  penciler: "Unknown",
  cover: "Unknown",
};

describe("ComicDetail", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<ComicDetail comic={comic} />);
    expect(wrapper).toBeTruthy();
  });

  it("Should match snapshot", () => {
    const wrapper = shallow(<ComicDetail comic={comic} />);
    expect(wrapper).toMatchSnapshot();
  });
});
