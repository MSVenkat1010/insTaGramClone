import React, { useEffect, useRef } from "react";
import "./Register.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@mui/material";

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRePassword, setShowRePassword] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({
    email:"",
    userName:"",
    passWord:"",
    rePassWord:""
  });

  const handleRegister =(event,field) => {

    if ((field === "userName" || field === "passWord" ||field === "rePassWord" )) {
      if(event.target.value.length <= 10){setUserDetails({ ...userDetails, [field]: event.target.value });}
    }else{
      setUserDetails({ ...userDetails, [field]: event.target.value });
    }
  };


  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="Register full-screen-div" style={{ color: "white" }}>
      <div className="credLogin">
        <img
          className="instagram_logo"
          src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
          alt="Instagram Logo"
        />
                <TextField
             //   autoComplete="email"
          label="Email address"
          value={userDetails.email}
         onChange={(event)=>{handleRegister(event,"email")}}
          type={"email"}
          id="email"
          sx={{ m: 1, width: "25ch" }}
          placeholder="email addresss"
        />
        <TextField
          label="User name"
          value={userDetails.userName}
         onChange={(event)=>{handleRegister(event,"userName")}}
          type={"text"}
          id="userName"
          sx={{ m: 1, width: "25ch" }}
          placeholder="user name"
        />
        <TextField
          label="password"
          value={userDetails.passWord}
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="password"
          sx={{ m: 1, width: "25ch" }}
         onChange={(event)=>{handleRegister(event,"passWord")}}
          InputProps={{
            endAdornment: (
              <span
                onClick={()=>{setShowPassword(!showPassword)}}
                onMouseDown={handleMouseDownPassword}
              >
                <RemoveRedEyeOutlinedIcon />
              </span>
            ),
          }}
        />
                <TextField
          label="re-enter password"
          value={userDetails.rePassWord}
          id="rePassword"
          type={showRePassword ? "text" : "password"}
          placeholder="password"
          sx={{ m: 1, width: "25ch" }}
          onChange={(event)=>{handleRegister(event,"rePassWord")}}
          InputProps={{
            endAdornment: (
              <span
                onClick={()=>{setShowRePassword(!showRePassword)}}
                onMouseDown={handleMouseDownPassword}
              >
                <RemoveRedEyeOutlinedIcon />
              </span>
            ),
          }}
        />

        <FormControl>
          <Button
            variant="contained"
            sx={{ m: 1, width: "25ch", textTransform: "none" , backgroundColor: "rgb(87,164,248)" }}
            disableRipple
          >
            {" "}
            Register
          </Button>
        </FormControl>

      </div>
    </div>
  );
}

export default Register;
