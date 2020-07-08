import React from "react";
import styled from "styled-components";
import Content from "./component/Content";
import TopBar from "./component/TopBar";

const AppWrapper = styled.div`
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <TopBar />
      <Content />
    </AppWrapper>
  );
}

export default App;
