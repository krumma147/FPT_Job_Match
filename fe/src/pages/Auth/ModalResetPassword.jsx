import React, { useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import CustomModal from './CustomModal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const handleResetPassword = async (event, passwordRef, id, handleClose) => {
    event.preventDefault();
    const newPassword = passwordRef.current.value;

    try {
        const response = await axios.put(`https://localhost:7282/api/Auth/ResetPassword/${id}`, { NewPassword: newPassword }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        Swal.fire('Successful', 'Updated password successfully', 'success');
        handleClose();
    } catch (error) {
        Swal.fire('Error', 'An error occurred. Please try again', 'error');
    }
};

export default function ModalResetPassword({ show, handleClose, id }) {
    const passwordRef = useRef();
    const [showPassword, setShowPassword] = useState(false); // state to toggle password visibility

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <CustomModal show={show} handleClose={handleClose} id="resetPasswordModal" title="Reset Password">
            <form className="modal-body">
                <div className="input-group">
                    <input type={showPassword ? "text" : "password"} className="form-control" id="new-password" placeholder='Enter New Password' name="newPassword" ref={passwordRef} />
                    <div className="input-group-append">
                        <span className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={(event) => handleResetPassword(event, passwordRef, id, handleClose)}>Reset Password</button>
                </div>
            </form>
        </CustomModal>
    );
} 