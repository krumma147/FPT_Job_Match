import React, { useState } from "react";
import UserModal from "../Button/UserModal";
import UserDetailsModal from "../Button/UserDetailModal";
const UserPanel = ({ users, AddUser, ModifyUser, RemoveUser }) => {
  const HandleDelete = (e, id) => {
    e.preventDefault();
    const cf = window.confirm("Are you sure you want to delete");
    if (cf) {
      RemoveUser(id);
    }
  };

  return (
    <>
      <div className="bg-grayE8 rounded h-100 p-4 m-4">
        <div className="row mb-4">
          <h4 className="col">User Manager</h4>
          <div className="col-2">
            <UserModal AddUser={AddUser} />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 ? null : "There are no application yet!"}
              {users?.map((user, index) => (
                <tr>
                  <td className="col-md-1">
                    <span>{index + 1}</span>
                  </td>
                  <td className="col-md-2"><UserDetailsModal user={user} id={index + 1} />
                  </td>
                  <td className="col-md-2">{user.user.email}</td>
                  <td className="col-md-2">{user.user.phoneNumber}</td>
                  <td className="col-md-2">{user.roles[0]}</td>
                  <td>
                    <div className="d-flex">
                      <UserModal
                        data={user}
                        ModifyUser={ModifyUser}
                        id={index + 1}
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => HandleDelete(e, user.user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
