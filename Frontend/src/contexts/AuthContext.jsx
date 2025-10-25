import {  createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import httpStatus from "http-status";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: "http://localhost:2000/api/v1/users"
})

export const AuthProvider = ({ children }) => {
  
  const authContext = useContext(AuthContext);

  const [userdata, setUserData] = useState(authContext);

  const router = useNavigate();  // We use it for permission like audio,video

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // Already logged in
  //     router("/home");
  //   }
  // }, [router]);

  const handleRegister = async (name, username, password) => {
    try {
      let request = await client.post("/register", {
        name: name,
        username: username,
        password: password
      })

      if (request.status === httpStatus.CREATED) {
        return request.data.message;
      }
    } catch (e) {
      throw e;
    }
  }

  const handleLogin = async (username, password) => {
    try {
      let request = await client.post("/login", {
        username: username,
        password: password
      })

      console.log(request.data);
      if (request.status === httpStatus.OK) {
        localStorage.setItem("token", request.data.token);
        router("/home");
      }
    } catch (e) {
      throw e;
    }
  }


  const getHistoryOfUser = async () => {
    try {
      let request = await client.get("/get_All_Activity",{
        params: {
          token: localStorage.getItem("token")
        }
      });
      return request.data;
    } catch (e) {
      throw e;
    }
  }

  const addToUserHistory = async (meetingCode) => {
    try {
      let request = await client.post("/add_to_activity", {
        token: localStorage.getItem("token"),
        meetingCode: meetingCode
      });
      return request.status;
    } catch (e) {
      throw e;
    }
  }


  const data = {
    userdata,setUserData,handleRegister,handleLogin,getHistoryOfUser,addToUserHistory
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )

}