import React from "react";
import styled from "styled-components";
import Content from "./component/Content";
import TopBar from "./component/TopBar";
import Modal from "./component/Modal";

const AppWrapper = styled.div`
  height: 100%;
`;
function App() {
  return (
    <AppWrapper>
      <TopBar />
      <Content />
      <Modal title="Spiderman" isShowing>
        Hola
      </Modal>
    </AppWrapper>
  );
}

export default App;
