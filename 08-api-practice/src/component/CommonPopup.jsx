import React from "react";
import { Modal } from "antd";

const CommonPopup = ({ children, ...props }) => {
  return (
    <Modal {...props}>
      {children}
    </Modal>
  );
};

export default CommonPopup;