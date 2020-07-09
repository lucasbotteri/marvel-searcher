import React from "react";
import { mount } from "enzyme";
import CharacterList from "./CharacterList";
import { StoreContext } from "../../../store";
import { MemoryRouter } from "react-router";

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
    <MemoryRouter initialEntries={["/"]}>
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
