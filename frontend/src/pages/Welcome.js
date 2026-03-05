import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Welcome(){

const navigate=useNavigate();

const username=localStorage.getItem("username");

const logout=()=>{

localStorage.removeItem("username");

navigate("/");

};

return(

<div className="welcome">

<h1>Welcome {username} 🎉</h1>

<p>You have successfully logged in.</p>

<button className="logout" onClick={logout}>
Logout
</button>

</div>

);

}

export default Welcome;