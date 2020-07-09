import React from "react";
import { mount } from "enzyme";
import TopBar from "./TopBar";
import { StoreContext } from "../../../store";

const characters = [
  {
    id: 1014997,
    name: "Deathstrike (Ultimate)",
    thumbnail: "someurl.com",
  },
];

const contextStore = {
  searchCharacter: () => {},
  searchComic: () => {},
  showFavs: () => {},
  hideFavs: () => {},
  isShowingFavs: false,
};

const mountTopBar = () => {
  return mount(
    <StoreContext.Provider value={contextStore}>
      <TopBar characters={characters} />
    </StoreContext.Provider>
  );
};

describe("TopBar", () => {
  it("Should render without crashing", () => {
    const wrapper = mountTopBar();
    expect(wrapper).toBeTruthy();
  });

  it("Should match snapshot", () => {
    const wrapper = mountTopBar();
    expect(wrapper).toMatchSnapshot();
  });
});
