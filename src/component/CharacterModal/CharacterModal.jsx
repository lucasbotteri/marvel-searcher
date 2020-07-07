import React, { useContext } from "react";
import Modal from "../Modal";
import { StoreContext } from "../../store";
import ComicList from "../ComicList";

const spidermanComic = {
  title: "Spider-Man",
  thumbnail:
    "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/4c002f7453eaa/portrait_fantastic.jpg",
  description:
    "HUNTED AFTERMATH! The fallout from continues to loom, and much of Peterâ€™s life is called into",
};

const comicList = [
  spidermanComic,
  spidermanComic,
  spidermanComic,
  spidermanComic,
];

const CharacterModal = () => {
  const { isShowingModal, characterSelected, hideModal } = useContext(
    StoreContext
  );
  return (
    <Modal
      isShowing={isShowingModal}
      title={characterSelected.name}
      onClose={hideModal}
    >
      <ComicList comics={comicList} />
    </Modal>
  );
};

export default CharacterModal;
