import React, { useRef, useState } from 'react';
import CustomModal from './CustomModal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../hooks/authHook';

export default function ModalResetPassword({ show, handleClose, id }) {
    const passwordRef = useRef();
    const [showPassword, setShowPassword] = useState(false); // state to toggle password visibility
    const { resetPassword } = useAuth();

    const handleResetPassword = async (event) => {
        event.preventDefault();
        const newPassword = passwordRef.current.value;
        const isSuccessful = await resetPassword(newPassword, id);
        if (isSuccessful) {
            handleClose();
        }
    };

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