import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { StoreContext } from "../../../store";
import Home from "./Home";

const characters = [
  {
    id: 1011377,
    name: "Spider-Man (Takuya Yamashiro)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/f/50/4be86ad8ada17/portrait_fantastic.jpg",
  },
  {
    id: 1011010,
    name: "Spider-Man (Ultimate)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/3/50/531771b4e8c60/portrait_fantastic.jpg",
  },
];

const contextStore = {
  searchRandomCharacter: () => {},
  searchCharacter: () => {},
  comic: null,
  characters: null,
  loadingContent: false,
  isShowingFavs: false,
  favs: null,
};

const mountHome = (overrideStore, overrideEntry) => {
  return mount(
    <MemoryRouter initialEntries={[overrideEntry || "/"]}>
      <StoreContext.Provider value={{ ...contextStore, ...overrideStore }}>
        <Home characters={characters} />
      </StoreContext.Provider>
    </MemoryRouter>
  );
};

describe("Home", () => {
  it("Should render without crashing", () => {
    const wrapper = mountHome();
    expect(wrapper).toBeTruthy();
  });

  it("Should render loading", () => {
    const wrapper = mountHome({
      loadingContent: true,
    });
    expect(wrapper.containsMatchingElement("...loading")).toBeTruthy();
  });

  it("Should render no results", () => {
    const wrapper = mountHome();
    expect(wrapper.containsMatchingElement("No Results Found")).toBeTruthy();
  });

  it("Should call searchRandomCharacter", () => {
    const searchRandomCharacter = jest.fn();
    mountHome({
      searchRandomCharacter,
    });
    expect(searchRandomCharacter).toHaveBeenCalled();
  });

  it("Should call searchCharacter", () => {
    const searchCharacter = jest.fn();
    mountHome(
      {
        searchCharacter,
      },
      "/?character=spiderman"
    );
    expect(searchCharacter).toHaveBeenCalledWith("spiderman");
  });

  it("Should match snapshot", () => {
    const wrapper = mountHome({ characters });
    expect(wrapper).toMatchSnapshot();
  });
});
