import React, { useState } from "react";
import "../../../components/styles/modal.css";
import Button from "../global/Button";
import { IoClose } from "react-icons/io5";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [userDob, setUserDob] = useState("");

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleDobChange = (e) => {
    setUserDob(e.target.value);
  };



  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div>
          <p className="modal-title-text">Enter Details</p>
          <IoClose className="close" onClick={onClose} />
        </div>
        <Input
          htmlSize={4}
          width="auto"
          placeholder="Full Name"
          onChange={handleNameChange}
        />
        <br />
        <InputGroup>
          <InputLeftAddon>DOB</InputLeftAddon>
          <Input
            type="date"
            placeholder="phone number"
            onChange={handleDobChange}
          />
        </InputGroup>
        <br />

        <Button
          title={"Save"}
          onClick={onSubmit}
          style={{ width: "258px", marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default Modal;
