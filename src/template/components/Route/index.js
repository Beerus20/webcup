import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../Main/index";
import Signup from "../Singup/index";
import Login from "../Login/index";

export default function index() {
    const user = localStorage.getItem("token");
  return (

    <Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
	</Routes>
  )
}
