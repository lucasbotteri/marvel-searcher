import React from "react";
import { shallow } from "enzyme";
import ComicList, { NonStyledLi } from "./ComicList";

const comics = [
  {
    id: 735,
    title: "Amazing Fantasy (2004) #1",
    description:
      "She's fierce, she's sassy...she sticks to walls! AMAZING FANTASY #1 is where it all begins: Meet an all-new, all-different heroine! Fiona Avery (AMAZING SPIDER-MAN) and Mark Brooks (MARVEL AGE SPIDER-MAN) launch a surprising series of teen-friendly adventures set in the current Marvel Universe!",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/9/80/56cb7746bd44a/standard_medium.jpg",
  },
  {
    id: 529,
    title: "Amazing Fantasy (2004) #2",
    description:
      "Sugar and spice and everything nice - that's what this little girl is totally NOT made of!  Marvel's scrappy new hero meets a tall, dark, and handsome stranger who leaves her with more questions than answers.  Who is this guy, anyway? And why has he taken such an interest in her?",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/6/30/56cb6bb538602/standard_medium.jpg",
  },
];

describe("ComicList", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<ComicList comics={comics} />);
    expect(wrapper).toBeTruthy();
  });

  it("Should render two items", () => {
    const wrapper = shallow(<ComicList comics={comics} />);
    expect(wrapper.find(NonStyledLi)).toHaveLength(2);
  });

  it("Should match snapshot", () => {
    const wrapper = shallow(<ComicList comics={comics} />);
    expect(wrapper).toMatchSnapshot();
  });
});
