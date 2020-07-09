import React, { useContext } from "react";
import Modal from "../../molecule/Modal";
import ComicList from "../../molecule/ComicList";
import { StoreContext } from "../../../store";

const CharacterModal = () => {
  const {
    isShowingModal,
    characterSelected,
    comics,
    hideModal,
    isLoadingComics,
  } = useContext(StoreContext);
  return isShowingModal ? (
    <Modal title={characterSelected.name} onClose={hideModal}>
      {isLoadingComics ? "Loading comics..." : <ComicList comics={comics} />}
    </Modal>
  ) : null;
};

export default CharacterModal;
