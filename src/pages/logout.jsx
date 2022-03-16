import React from "react";
import { useEffect, useState } from "react";


import {useAuth} from "../context/AuthContext";

export default function Logout() {

  const {user, login, logout, edit_account} = useAuth();



  useEffect(async() => {
      await logout();
  },[])

  return (
    <div>
    </div>
  );
}
