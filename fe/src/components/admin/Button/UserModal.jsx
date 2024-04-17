import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiFileEdit, mdiPlusCircle } from "@mdi/js";

const UserModal = ({ AddUser, data, ModifyUser, id }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  const ToggleUserModal = async () => {
    const user = {
      fullName: fullname,
      userName: username,
      email,
      password,
      role,
      phoneNumber: phone,
    };
    // console.log(user);
    if (data) {
      await ModifyUser(data.user.id, user);
    } else {
      await AddUser(user);
    }
    CloseModal();
  };

  const CloseModal = () => {
    setFullname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("");
    setPhone("");
  };

  const ModalBody = (
    <div className="bg-light rounded h-100 p-3">
      <div className="form-floating mb-3">
        <label htmlFor={data ? `floatingInput${id}` : `#floatingInput`}>
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id={data ? `floatingInput${id}` : `#floatingInput`}
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor={data ? `floatingInput${id}` : `#floatingInput`}>
          UserName
        </label>
        <input
          type="text"
          className="form-control"
          id={data ? `floatingInput${id}` : `#floatingInput`}
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor={data ? `floatingInput${id}` : `#floatingInput`}>
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id={data ? `floatingInput${id}` : `#floatingInput`}
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="floatingPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="floatingSelect">Role: </label>
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option selected>Open this select menu</option>
          <option value="JobSeeker">JobSeeker</option>
          <option value="Employer">Employer</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div className="form-floating mb-3">
        <label htmlFor={data ? `floatingInput${id}` : `#floatingInput`}>
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id={data ? `floatingInput${id}` : `#floatingInput`}
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );

  const ActiveModal = () => {
    if (data) {
      setFullname(data.fullName);
      setUsername(data.user.userName);
      setEmail(data.user.email);
      setPassword(data.user.password);
      setRole(data.roles[0]);
      setPhone(data.user.phoneNumber);
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={data ? `#EditUserModal${id}` : `#UserModal`}
        onClick={ActiveModal}
      >
        {data ? (
          <Icon path={mdiFileEdit} size={1} />
        ) : (
          <Icon path={mdiPlusCircle} size={1} />
        )}
        {data ? `` : `User`}
      </button>

      <div
        class="modal fade"
        id={data ? `EditUserModal${id}` : `UserModal`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {data ? `Edit User` : `Add New User`}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">{ModalBody}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={CloseModal}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={ToggleUserModal}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
