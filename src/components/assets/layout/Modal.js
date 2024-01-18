import React, { useState } from "react";
import "../../../components/styles/modal.css";
import Button from "../global/Button";
import { IoClose } from "react-icons/io5";
import { Input, InputGroup, InputLeftAddon, HStack, FormControl, FormLabel, Box } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [userDob, setUserDob] = useState("");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleDobChange = (e) => {
    setUserDob(e.target.value);
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
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
          onChange={handleNameChange} style={{width: "398px"}}
        />
        <br />
        <HStack>
      <Box>
        <FormControl id="startDate" isRequired>
          <FormLabel>Start Date</FormLabel>
          <Box border="1px" borderColor="gray.300" borderRadius="md" p={2} w={195}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM"
              placeholderText="Select Date"
              isClearable
            />
          </Box>
        </FormControl>
      </Box>
      <Box>
        <FormControl id="endDate" isRequired>
          <FormLabel>End Date</FormLabel>
          <Box border="1px" borderColor="gray.300" borderRadius="md" p={2} w={195}>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM"
              placeholderText="Select Date"
              isClearable
            />
          </Box>
        </FormControl>
      </Box>
    </HStack>
        <br />
        <InputGroup>
          <InputLeftAddon>DOB</InputLeftAddon>
          <Input
            type="date"
            placeholder="Date Of Birth"
            onChange={handleDobChange} 
          />
        </InputGroup>
        <br />

        <Button
          title={"Save"}
          onClick={onSubmit}
          style={{ width: "395px", marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default Modal;
