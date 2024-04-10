import React, { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import CustomModal from './CustomModal';

const handleForgotPassword = async (event, emailRef) => {
    event.preventDefault();
    const email = emailRef.current.value;
    console.log("Email: ", email);
    try {
        const response = await axios.post('https://localhost:7282/api/Auth/ForgotPassword', { email }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        Swal.fire('Successful', 'Your request has been successful. Please check your email to reset your password', 'success');
    } catch (error) {
        Swal.fire('Error', 'An error occurred. Please try again', 'error');
    }
};

export default function ModalForgot() {
    const emailRef = useRef();
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
