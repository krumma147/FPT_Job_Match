import React, { useRef } from 'react';
import CustomModal from './CustomModal';
import useAuth from '../../hooks/authHook';

export default function ModalForgot() {
    const emailRef = useRef();
    const { forgotPassword } = useAuth();

    const handleForgotPassword = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        forgotPassword(email);
    };
    return (
        <CustomModal id="forgotPasswordModal" title="Forgot Password">
            <form className="modal-body">
                <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                    <input type="text" className="form-control" id="recipient-name" name="email" ref={emailRef} placeholder='Enter Email' />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(event) => handleForgotPassword(event, emailRef)}>Send Email</button>
                </div>
            </form>
        </CustomModal>
    )
}
