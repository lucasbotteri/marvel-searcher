import React from "react";
import styled from "styled-components";
import Content from "./component/Content";
import TopBar from "./component/TopBar";
import Modal from "./component/Modal";
import ItemList from "./component/ComicList";

const AppWrapper = styled.div`
  height: 100%;
`;

const spidermanComic = {
  title: "Spider-Man",
  thumbnail:
    "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/4c002f7453eaa/portrait_fantastic.jpg",
  description:
    "HUNTED AFTERMATH! The fallout from continues to loom, and much of Peter’s life is called into",
};

const comicList = [
  spidermanComic,
  spidermanComic,
  spidermanComic,
  spidermanComic,
];

function App() {
  return (
    <AppWrapper>
      <TopBar />
      <Content />
      <Modal title="Spiderman" isShowing>
        <ItemList comics={comicList} />
      </Modal>
    </AppWrapper>
  );
}

export default App;
