import React from "react";
import styled from "styled-components";
const ModalDivBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
const ModalDiv = styled.div`
  position: fixed;
  top: 15vh;
  left: 5%;
  width: 90%;
  margin: 0 auto;
  height: 60vh;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 100000;
  animation: slide-down 300ms ease-out forwards;
  overflow: scroll;
  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
`;

const ConfirmModel = ({ children }) => {
  return (
    <ModalDivBack>
      <ModalDiv>{children}</ModalDiv>
    </ModalDivBack>
  );
};

export default ConfirmModel;

// @keyframes slide-down {
//   from {
//     opacity: 0;
//     transform: translateY(-3rem);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
