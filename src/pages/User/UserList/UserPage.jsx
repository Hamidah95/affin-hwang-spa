import React, { useEffect, useState } from "react";
import RegisterModal from "../../../components/RegisterModal/registerModal";
import DeleteModal from "../../../components/DeleteModal/deleteModal";

import PeopleIcon from "@mui/icons-material/People";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import AgeIcon from "@mui/icons-material/Elderly";
import StatusIcon from "@mui/icons-material/Diversity2";

import ExpandBlock from "../../../components/ExpandBlock/ExpandBlock";
import { v4 as uuid } from "uuid";
import "./userList.css";

export default function UserPage() {
  const saveUserHistory = JSON.parse(localStorage.getItem("Users"));
  const [users, setUsers] = useState(saveUserHistory ?? []);
  const [openRegister, setOpenRegister] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [userId, setUserId] = useState(null);

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(users));
  }, [users]);

  //get the saved notes and add them to the array
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Users"));
    if (data) {
      setUsers(data);
    }
  }, []);

  const saveUserHandler = (data) => {
    setUsers((prevState) => [
      ...prevState,
      {
        id: uuid(),
        data,
      },
    ]);
    setOpenRegister(false);
  };

  const deleteUser = (id) => {
    const filteredUsers = users.filter((note) => note.id !== id);
    setUsers(filteredUsers);
    console.log("ID ", id);
    setOpenDelete(false);
  };

  return (
    <>
      <h1 className="heading">Customer List</h1>
      <p>The user is referring to the customer</p>

      <header>
        <button className="button" onClick={() => setOpenRegister(true)}>
          Add User
        </button>
      </header>

      {users.length === 0 && (
        <h3 className="subHeading">You have no user added. Start adding one</h3>
      )}

      {users.map((note) => (
        <ExpandBlock
          title={note.data.name}
          key={note.id}
          onClickDelete={() => {
            setOpenDelete(true);
            setUserId(note.id);
          }}
        >
          <div className="content">
            <PeopleIcon />
            <span style={{ marginLeft: 10 }}>{note.data.name}</span>
            <div />
            <p>{note.data.category}</p>
            <MailIcon />
            <span style={{ marginLeft: 10 }}>{note.data.email}</span>
            <div />
            <PhoneIcon />
            <span style={{ marginLeft: 10 }}>{note.data.phone}</span>
            <div />
            {note.data.status && (
              <>
                <StatusIcon />
                <span style={{ marginLeft: 10 }}>{note.data.status}</span>
                <div />
              </>
            )}
            {note.data.age && (
              <>
                <AgeIcon />
                <span style={{ marginLeft: 10 }}>{note.data.age}</span>
              </>
            )}
          </div>
        </ExpandBlock>
      ))}

      {openRegister && (
        <RegisterModal
          setIsOpen={setOpenRegister}
          onClickSubmit={saveUserHandler}
        />
      )}

      {openDelete && (
        <DeleteModal
          setIsOpen={setOpenDelete}
          clickDelete={() => deleteUser(userId)}
        />
      )}
    </>
  );
}
