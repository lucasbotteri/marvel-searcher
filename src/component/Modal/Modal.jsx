import React from "react";
import styled from "styled-components";
import { faTimes as CloseSvg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const ModalBackground = styled.div`
  background-color: ${(props) => props.theme.opaqueColor};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const ModalWrapper = styled.aside`
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: ${(props) => props.theme.radius};
  border: 1px solid ${(props) => props.theme.secondaryColor};
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  height: 70%;
  margin: 10% auto;
  padding: 10px;
  width: 400px;

  @media (max-width: 425px) {
    height: 100%;
    margin: 45px 0;
    width: 95%;
  }
`;

const ModalContent = styled.div`
  align-self: center;
  padding: 10px;
  overflow: auto;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  align-self: flex-end;
  color: ${(props) => props.theme.secondaryColor};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.opaqueColor};
  }
`;

const ModalTitle = styled.h3`
  align-self: flex-start;
  color: ${(props) => props.theme.primaryFontColor};
  font-family: ${(props) => props.theme.modalFont};
  font-weight: bold;
`;

const Modal = ({ children, title, onClose }) => {
  return (
    <ModalBackground>
      <ModalWrapper role="dialog" aria-labelledby="modal-title">
        <CloseIcon icon={CloseSvg} onClick={onClose} aria-label="close modal" />
        <ModalTitle id="modal-title"> {title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </ModalBackground>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
