import axios from "axios";
import { createContext } from "react";
import { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom"

const domain = process.env.REACT_APP_API_DOMAIN_NAME;

const AuthContext = createContext();



export const getUser = async () => {

  const user_token = window.localStorage.getItem("user_token");

  const auth_url =  `${domain}/user-account/check-auth`;

  if (user_token !== "undefined") {

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user_token}`,
      },
    };

    return await axios
      .get(auth_url, config)
      .then(async (response) => {
        if (response.data) {
          const res = await response.data;
          return { status: "SIGNED_IN", user: res};
        } else {
          return { status: "SIGNED_OUT", user: null};
        }
      })
      .catch((err) => {

        return { status: "SIGNED_OUT", user: null};
      });
  } else {
    return { status: "SIGNED_OUT", user: null};
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);


    const navigate = useNavigate();


  useEffect(async () => {
    const temp_auth = await getUser();
    setUser(temp_auth["user"]);
  }, []);


  const login = async (body) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const login_url = `${domain}/user-account/login`;

    return await axios
      .post(login_url, body, config)
      .then(async (response) => {
        const res = await response.data;
        const access_token = res['access_token'];

        setToken(access_token);
        window.localStorage.setItem("user_token", access_token);


        const temp_auth = await getUser();
        setUser(temp_auth["user"]);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };


  const edit_account = async (body) => {

    const temp_token = window.localStorage.getItem("user_token")
        console.log(temp_token)

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${temp_token}`,
      },
    };

    const edit_url = `${domain}/user-account/edit-info`;

    return await axios
      .post(edit_url, body, config)
      .then(async (response) => {

        const temp_auth = await getUser();
        setUser(temp_auth["user"]);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };



  const reset_password = async (body) => {

    const temp_token = window.localStorage.getItem("user_token")
        console.log(temp_token)

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${temp_token}`,
      },
    };

    const reset_url = `${domain}/user-account/reset-password`;

    return await axios
      .post(reset_url, body, config)
      .then(async (response) => {

        const temp_auth = await getUser();
        setUser(temp_auth["user"]);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };



  const logout = async () => {

     window.localStorage.removeItem("user_token");

     setUser(null);
     setToken(null);
     navigate("/", {replace: true})
  };


  return (
    <AuthContext.Provider value={{ user, token, logout, login, edit_account, reset_password }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
