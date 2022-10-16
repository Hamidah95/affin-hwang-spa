import React from "react";
import "./deleteModal.css";

const DeleteModal = ({ setIsOpen, clickDelete }) => {
  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div className={"modalHeader"}>
            <h5 className={"heading"}>Delete User</h5>
          </div>
          <div className={"modalContent"}>
            Are you sure you want to delete this user?
          </div>
          <div className={"modalContent"}>This action is irreversible</div>
          <div className={"modalActions"}>
            <div className={"actionsContainer"}>
              <button className={"deleteBtn"} onClick={clickDelete}>
                Delete
              </button>
              <button className={"cancelBtn"} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
