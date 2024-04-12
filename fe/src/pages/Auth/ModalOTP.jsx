import React, { useState } from 'react';
import CustomModal from './CustomModal';
import useAuth from '../../hooks/authHook';

const ModalOTP = ({ isOpen, onClose, username }) => {
    const [otp, setOtp] = useState('');

    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };
    const { confirmOTP } = useAuth();

    const handleConfirm = async () => {
        await confirmOTP(username, otp);
    };

    return (
        <CustomModal show={isOpen} handleClose={onClose}>
            <div className="modal-header">
                <h4 className="modal-title">Enter the OTP in the email you just received</h4>
            </div>
            <div className="modal-body">

                <input type="text" value={otp} onChange={handleOtpChange} className="form-control" placeholder='Enter OTP' />
            </div>
            <div className="modal-footer">
                <button onClick={handleConfirm} className="btn btn-primary">Confirm</button>
            </div>
        </CustomModal>
    );
};

export default ModalOTP;