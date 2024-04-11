import React, { useState } from "react";

const UserDetailsModal = ({ user, id }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(user);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button type="button" className="btn btn-link" onClick={toggleModal}>
        {user.user.userName}
      </button>

      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
          onClick={toggleModal}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{user.user.userName} Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                />
              </div>
              <div className="modal-body">
                <p>Id: {user.user.id}</p>
                <p>UserName: {user.user.userName}</p>
                <p>2FA: {user.user.twoFactorEnabled ? "Enable" : "Disable"}</p>
                <p>Email: {user.user.email}</p>
                <p>Phone Number: {user.user.phoneNumber}</p>
                <p>Role: {user.roles.map((e) => e)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetailsModal;
