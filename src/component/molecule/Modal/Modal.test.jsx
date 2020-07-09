import React from "react";
import { shallow } from "enzyme";
import Modal, { CloseIcon } from "./Modal";

describe("ComicDetail", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(
      <Modal title="title" onClose={() => {}}>
        <div>Test</div>
      </Modal>
    );
    expect(wrapper).toBeTruthy();
  });

  it("Should render content", () => {
    const wrapper = shallow(
      <Modal title="title" onClose={() => {}}>
        <div>Test</div>
      </Modal>
    );
    expect(wrapper.containsMatchingElement(<div>Test</div>)).toBeTruthy();
  });

  it("Should render title", () => {
    const wrapper = shallow(
      <Modal title="title" onClose={() => {}}>
        <div>Test</div>
      </Modal>
    );
    expect(wrapper.containsMatchingElement("title")).toBeTruthy();
  });

  it("Should call onClose", () => {
    const onClose = jest.fn();
    const wrapper = shallow(
      <Modal title="title" onClose={onClose}>
        <div>Test</div>
      </Modal>
    );
    const closeIcon = wrapper.find(CloseIcon);
    closeIcon.simulate("click");
    expect(onClose).toHaveBeenCalled();
  });

  it("Should match snapshot", () => {
    const wrapper = shallow(
      <Modal title="title" onClose={() => {}}>
        <div>Test</div>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
