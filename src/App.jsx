import React from "react";
import styled from "styled-components";
import Home from "./component/page/Home";
import TopBar from "./component/organism/TopBar";

const AppWrapper = styled.div`
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <TopBar />
      <Home />
    </AppWrapper>
  );
}

export default App;
