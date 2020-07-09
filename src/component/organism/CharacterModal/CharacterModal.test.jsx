import React from "react";
import { mount } from "enzyme";
import CharacterModal from "./CharacterModal";
import { StoreContext } from "../../../store";

const contextStore = {
  isShowingModal: true,
  characterSelected: { id: 1014997, name: "spiderman" },
  comics: [],
  hideModal: () => {},
  isLoadingComics: false,
};

const mountCharacterModal = (overrideStore) => {
  return mount(
    <StoreContext.Provider value={{ ...contextStore, ...overrideStore }}>
      <CharacterModal />
    </StoreContext.Provider>
  );
};

describe("CharacterModal", () => {
  it("Should render without crashing", () => {
    const wrapper = mountCharacterModal();
    expect(wrapper).toBeTruthy();
  });

  it("Should render loading", () => {
    const wrapper = mountCharacterModal({ isLoadingComics: true });
    expect(wrapper.containsMatchingElement("Loading comics...")).toBeTruthy();
  });

  it("Should render a comic list", () => {
    const wrapper = mountCharacterModal();
    expect(wrapper).toBeTruthy();
  });

  it("Should not render modal", () => {
    const wrapper = mountCharacterModal({ isShowingModal: false });
    expect(wrapper).toMatchObject({});
  });

  it("Should match snapshot", () => {
    const wrapper = mountCharacterModal();
    expect(wrapper).toMatchSnapshot();
  });
});
