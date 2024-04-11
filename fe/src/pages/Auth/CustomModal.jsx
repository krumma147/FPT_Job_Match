import React from 'react';
import styled, { keyframes } from 'styled-components'

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledModal = styled.div`
  &.modal.fade.show {
    animation: ${slideDown} 0.5s ease-out;
  }
`;

export default function CustomModal({ show, children, handleClose, id, title }) {
    return (
        <StyledModal className={`modal fade ${show ? 'show' : ''}`} id={id} tabIndex="-1" role="dialog" aria-labelledby={`${id}Label`} aria-hidden="true" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </StyledModal>
    );
}