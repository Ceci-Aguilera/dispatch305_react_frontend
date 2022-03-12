import React from "react";
import "../styles/UserAccountInfo.css";

import { Button, Row, Col, Form } from "react-bootstrap";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Login from "../components/Login";
import Account from "../components/Account";
import EditAccountModal from "../components/EditAccountModal";
import ResetPasswordModal from "../components/ResetPasswordModal";

import {useAuth} from "../context/AuthContext";

export default function UserAccountInfo() {

  const {user, login, logout, edit_account, reset_password} = useAuth();



  const documents_info = [
    {
      name: "Authorization Letter",
      filename:"authority_letter"
    },
    {
      name: "W9",
      doc_name:"w9"
    },
    {
      name: "Insurance",
      filename:"insurance"
    },
    {
      name: "NOA",
      filename:"noa"
    },
  ];

  const [show_edit_account_modal, setShowEditAccountModal] = useState(false);
  const [show_reset_password_modal, setShowResetPasswordModal] = useState(false);

  const handleShowEditAccountModal = () => {
    setShowEditAccountModal(true);
  };

  const handleCloseEditAccountModal = () => {
    setShowEditAccountModal(false);
  };

  const handleShowResetPasswordModal = () => {
    setShowResetPasswordModal(true);
  };

  const handleCloseResetPasswordModal = () => {
    setShowResetPasswordModal(false);
  };


  return (
    <div className="profile-div">
      {user?
        <>
      <Account
        onClickEditAccount={handleShowEditAccountModal}
        onClickResetPasswordModal={handleShowResetPasswordModal}
        user_info={user}
        documents_info={documents_info}
      />
      <EditAccountModal
        show_modal={show_edit_account_modal}
        close_modal={handleCloseEditAccountModal}
        user_info={user}
      editAccountFunction={edit_account}
      />
    <ResetPasswordModal show_modal={show_reset_password_modal}
    close_modal={handleCloseResetPasswordModal}
    user_info={user}
    editAccountFunction={reset_password}/>
    </>
  :<Login loginFunction = {login} />}
    </div>
  );
}
