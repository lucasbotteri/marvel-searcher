import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import CharacterList from "./CharacterList";
import { StoreContext } from "../../../store";

const characters = [
  {
    id: 1014997,
    name: "Deathstrike (Ultimate)",
    thumbnail: "someurl.com",
  },
];

const contextStore = {
  selectCharacter: () => {},
  searchCharacterComics: () => {},
  saveFav: () => {},
  removeFav: () => {},
  favs: null,
};

const mountCharacterList = () => {
  return mount(
    <MemoryRouter initialEntries={["/"]} keyLength={0}>
      <StoreContext.Provider value={contextStore}>
        <CharacterList characters={characters} />
      </StoreContext.Provider>
    </MemoryRouter>
  );
};

describe("CharacterList", () => {
  it("Should render without crashing", () => {
    const wrapper = mountCharacterList();
    expect(wrapper).toBeTruthy();
  });

  it("Should match snapshot", () => {
    const wrapper = mountCharacterList();
    expect(wrapper).toMatchSnapshot();
  });
});
