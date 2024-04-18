import React, { useEffect, useState } from "react";
import UserModal from "../Button/UserModal";
import UserDetailsModal from "../Button/UserDetailModal";
import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";
import {
  createConnection,
  registerMessageReceivedHandler,
} from "../../../Service/signalRChat";
import ChatAdmin from "../../../pages/Chat/ChatAdmin";
const UserPanel = ({ users, AddUser, ModifyUser, RemoveUser }) => {
  const [messages, setMessages] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    createConnection("Admin");
    registerMessageReceivedHandler((sender, message) => {
      // console.log(sender, message);
      setMessages((messages) => {
        const updatedMessages = {
          ...messages,
          [sender]: [...(messages[sender] || []), { sender, message }],
        };
        return updatedMessages;
      });
    });
  }, []);
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
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Role</th>
                <th scope="col">Messages</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 ? null : "There are no application yet!"}
              {users.length > 0 ? (
                users?.map((user, index) => (
                  <tr key={index}>
                    <td className="col-md-1">
                      <span>{index + 1}</span>
                    </td>
                    <td className="col-md-2">
                      <UserDetailsModal user={user} id={index + 1} />
                    </td>
                    <td className="col-md-2">{user.user.email}</td>
                    <td className="col-md-2">{user.user.phoneNumber}</td>
                    <td className="col-md-2">{user.roles[0]}</td>
                    <td>
                      <span
                        style={{
                          background: "blue",
                          padding: "0 7px",
                          color: "#fff",
                        }}
                        onClick={() => setSelectedUser(user)}
                      >
                        {messages[user.user.email]?.length || 0}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex">
                        {/* Edit Btn */}
                        <UserModal
                          data={user}
                          ModifyUser={ModifyUser}
                          id={index + 1}
                        />
                        {user.roles[0] === "Admin" ? null : (
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => HandleDelete(e, user.user.id)}
                          >
                            <Icon path={mdiTrashCan} size={1} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <span> There is no application yet!</span>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {selectedUser && (
        <ChatAdmin
          user={selectedUser}
          messages={messages[selectedUser.user.email] || []}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
};

export default UserPanel;
