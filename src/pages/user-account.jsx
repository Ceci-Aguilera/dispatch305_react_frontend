import React from "react";
import "../styles/UserAccountInfo.css";

import { Button, Row, Col, Form } from "react-bootstrap";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Login from "../components/Login";
import Account from "../components/Account";
import EditAccountModal from "../components/EditAccountModal";

export default function UserAccountInfo() {
  const user_info = {
    contact_name: "Some Contact Name",
    email: "SomeEmail@gmail.com",
    phone: "1111111",
    company_name: "Some Company Name",
    account_type: "BASICO",
    pending_bill: "5000",
  };

  const documents_info = [
    {
      name: "Authorization Letter",
      link: "https://localhost:3000",
    },
    {
      name: "W9",
      link: "https://localhost:3000",
    },
    {
      name: "Insurance",
      link: "https://localhost:3000",
    },
  ];

  const [show_edit_account_modal, setShowEditAccountModal] = useState(false);

  const handleShowEditAccountModal = () => {
    setShowEditAccountModal(true);
  };

  const handleCloseEditAccountModal = () => {
    setShowEditAccountModal(false);
  };

  return (
    <div className="profile-div">
      <Account
        onClickEditAccount={handleShowEditAccountModal}
        user_info={user_info}
        documents_info={documents_info}
      />
      <EditAccountModal
        show_modal={show_edit_account_modal}
        close_modal={handleCloseEditAccountModal}
        user_info={user_info}
      />
    </div>
  );
}
