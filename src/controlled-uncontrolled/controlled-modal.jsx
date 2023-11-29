import { styled } from "styled-components";
import PropTypes from 'prop-types';

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

export const ControlledModal = ({ shouldShow, close, children }) => {
  return (
    <>
      {shouldShow && (
        <ModalBackground onClick={close}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={close}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

ControlledModal.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
