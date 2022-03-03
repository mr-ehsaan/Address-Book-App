import React from "react";
import { Modal } from "antd";
import Details from "./UserDetails.jsx";

export default function Popup({ userDetails, open, handleClose }) {
  return (
    <Modal
      title="Basic Modal"
      visible={open}
      onOk={handleClose}
      onCancel={handleClose}
      width="fit-to-content"
    >
      <Details userDetails={userDetails} />
    </Modal>
  );
}
