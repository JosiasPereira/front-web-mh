import React from 'react';
import ReactDOM from 'react-dom';

import {Backdrop, WrappedModal, InsideWrapper} from './styles';


const Modal = React.memo(
  ({ opened, close, children }) => {
    return ReactDOM.createPortal(
      <>
        <Backdrop onClick={close} opened={opened} />
        <WrappedModal opened={opened}>
          <InsideWrapper>{children}</InsideWrapper>
        </WrappedModal>
      </>,
      document.getElementById('root-modal')
    );
  },
  (prevProps, nextProps) => {
    return prevProps.opened === nextProps.opened;
  }
);

export default Modal;
