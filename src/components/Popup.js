import React from "react";
import { Modal } from "antd";
import Details from "./UserDetails";

export default function Popup({ singleUser, open, handleClose }) {
  return (
    <Modal
      title="Basic Modal"
      visible={open}
      onOk={handleClose}
      onCancel={handleClose}
      width="fit-to-content"
    >
      <Details singleUser={singleUser} />
    </Modal>
  );
}
