import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { StoreContext } from "./store";
import App from "./App";

const contextStore = {
  characters: [
    {
      id: 1010727,
      name: "Spider-dok",
      thumbnail:
        "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg",
    },
    {
      id: 1009157,
      name: "Spider-Girl (Anya Corazon)",
      thumbnail:
        "https://i.annihil.us/u/prod/marvel/i/mg/a/10/528d369de3e4f/portrait_fantastic.jpg",
    },
    {
      id: 1009610,
      name: "Spider-Man",
      thumbnail:
        "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/portrait_fantastic.jpg",
    },
    {
      id: 1011054,
      name: "Spider-Man (1602)",
      thumbnail:
        "https://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746/portrait_fantastic.jpg",
    },
  ],
  characterSelected: { id: 1009610, name: "Spider-Man" },
  comics: [
    {
      id: 6482,
      title: "The Amazing Spider-Man (1963) #1",
      description:
        "Spider-Man, in one of his earliest adventures following Uncle Ben's death, must save a crew of astronauts aboard a malfunctioning space ship!",
      thumbnail:
        "https://i.annihil.us/u/prod/marvel/i/mg/d/40/5196582d03800/standard_medium.jpg",
    },
    {
      id: 6593,
      title: "The Amazing Spider-Man (1963) #2",
      description:
        "The Vulture's rampage in Manhattan begins. Can Spidey take down the avian menace?",
      thumbnail:
        "https://i.annihil.us/u/prod/marvel/i/mg/4/50/5192af7c78397/standard_medium.jpg",
    },
  ],
  comic: null,
  loadingContent: false,
  favs: [],
  isShowingFavs: false,
  isShowingModal: true,
  showModal: false,
  isLoadingComics: false,
  searchCharacters: () => {},
  searchCharacter: () => {},
  searchRandomCharacter: () => {},
  searchCharacterComics: () => {},
  searchComic: () => {},
  selectCharacter: () => {},
  saveFav: () => {},
  removeFav: () => {},
  showFavs: () => {},
  hideFavs: () => {},
  hideModal: () => {},
};

const mountApp = () => {
  return mount(
    <MemoryRouter initialEntries={["/"]}>
      <StoreContext.Provider value={contextStore}>
        <App />
      </StoreContext.Provider>
    </MemoryRouter>
  );
};

describe("App", () => {
  it("Should render without crashing", () => {
    const wrapper = mountApp();
    expect(wrapper).toBeTruthy();
  });

  it("Should match snapshot", () => {
    const wrapper = mountApp();
    expect(wrapper).toMatchSnapshot();
  });
});
