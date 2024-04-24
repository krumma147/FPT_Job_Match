import React, { useState, useEffect } from "react";
import {
  createConnection,
  registerMessageReceivedHandler,
} from "../../Service/signalRChat";
//import "../../styles/admin/css/chatstyle.css";
import ChatAdmin from "../../pages/Chat/ChatAdmin";

const AdminChatNav = ({ users }) => {
  const [messages, setMessages] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

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

  const filteredUsers = users?.filter(u => u.fullName.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex-column">
        <div className="nav-item input-group mb-4">
          <input
            type="text"
            placeholder="Search..."
            name
            className="form-control search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="input-group-prepend">
            <span className="input-group-text search_btn">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
        <div className="nav-item">
          <ul className="list-group">
            {filteredUsers?.map((u) => (
              u.roles[0] !== "Admin" && (
                <>
                  <li className="list-group-item mb-2">
                    <div className="d-flex">
                      <div className="img_cont mr-3">
                        <img
                          src="assets/home/img/jobseeker.jpg"
                          className="rounded-circle user_img"
                          style={{ width: 60, height: 60 }}
                          alt=""
                        />
                        <span className="online_icon" />
                      </div>
                      <div
                        className="user_info"
                        onClick={() => setSelectedUser(u)}
                      >
                        <h5>
                          {u.fullName}
                          <span
                            style={{
                              background: "blue",
                              padding: "0 7px",
                              color: "#fff",
                            }}
                          >
                            {messages[u.user.email]?.length || 0}
                          </span>
                        </h5>
                        <p>online</p>
                      </div>
                    </div>
                  </li>
                  <span>
                    {selectedUser && (
                      <ChatAdmin
                        user={selectedUser}
                        messages={messages[selectedUser.user.email] || []}
                        onClose={() => setSelectedUser(null)}
                      />
                    )}
                  </span>
                </>
              )
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminChatNav;
