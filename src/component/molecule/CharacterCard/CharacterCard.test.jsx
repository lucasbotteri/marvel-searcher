import React from "react";
import { shallow } from "enzyme";
import CharacterCard, { TopRightStar } from "./CharacterCard";

const character = {
  id: 1014997,
  name: "Deathstrike (Ultimate)",
  thumbnail: "someurl.com",
};

describe("CharacterCard", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(
      <CharacterCard
        character={character}
        isFaved={false}
        onClick={() => {}}
        onFaved={() => {}}
        onUnfaved={() => {}}
      />
    );
    expect(wrapper).toBeTruthy();
  });

  it("Should show solid star", () => {
    const wrapper = shallow(
      <CharacterCard
        character={character}
        onClick={() => {}}
        onFaved={() => {}}
        onUnfaved={() => {}}
        isFaved
      />
    );

    expect(wrapper.find(TopRightStar).prop("isSolid")).toBeTruthy();
  });

  it("Should show not solid star", () => {
    const wrapper = shallow(
      <CharacterCard
        character={character}
        isFaved={false}
        onClick={() => {}}
        onFaved={() => {}}
        onUnfaved={() => {}}
      />
    );
    expect(wrapper.find(TopRightStar).prop("isSolid")).toBeFalsy();
  });

  it("Should call onClick", () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(
      <CharacterCard
        character={character}
        isFaved={false}
        onFaved={() => {}}
        onUnfaved={() => {}}
        onClick={onClickSpy}
      />
    );
    wrapper.simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });

  it("Should call onFaved", () => {
    const onFaved = jest.fn();
    const wrapper = shallow(
      <CharacterCard
        character={character}
        isFaved={false}
        onFaved={onFaved}
        onUnfaved={() => {}}
        onClick={() => {}}
      />
    );
    const Star = wrapper.find(TopRightStar);
    Star.simulate("click", {
      stopPropagation: () => {},
    });
    expect(onFaved).toHaveBeenCalled();
  });

  it("Should call onUnfaved", () => {
    const onUnfaved = jest.fn();
    const wrapper = shallow(
      <CharacterCard
        character={character}
        onFaved={() => {}}
        onUnfaved={onUnfaved}
        onClick={() => {}}
        isFaved
      />
    );
    const Star = wrapper.find(TopRightStar);
    Star.simulate("click", {
      stopPropagation: () => {},
    });
    expect(onUnfaved).toHaveBeenCalled();
  });

  it("Should match snapshot", () => {
    const wrapper = shallow(
      <CharacterCard
        character={character}
        onFaved={() => {}}
        onUnfaved={() => {}}
        onClick={() => {}}
        isFaved
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
