import React, { useEffect, useRef } from "react";
import "./userLogin.css";
import insta_Png from ".././Resources/Instagram_SideBar.png"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@mui/material";

function UserLogin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({
    userName: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleUserName = (event) => {
    if (event.target.value.length <= 10) {
      setUserDetails({ ...userDetails, userName: event.target.value });
    }
  };

  const handlePassword = (event) => {
    if (event.target.value.length <= 10) {
      setUserDetails({ ...userDetails, password: event.target.value });
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="userLogin full-screen-div" style={{ color: "white" }}>
      <div className="bannerLogin">
      <img
          className="instagram_png"
          src={insta_Png}
          alt="Instagram Logo"
        />
      </div>
      <div className="credLogin">
        <img
          className="instagram_logo"
          src="https://freelogopng.com/images/all_img/1658587465instagram-name-logo.png"
          alt="Instagram Logo"
        />
        <TextField
          label="user Name"
          value={userDetails.userName}
          onChange={handleUserName}
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          placeholder="user name"
        />
        <TextField
          label="password"
          value={userDetails.password}
          id="test"
          type={showPassword ? "text" : "password"}
          placeholder="password"
          sx={{ m: 1, width: "25ch" }}
          onChange={handlePassword}
          InputProps={{
            endAdornment: (
              <span
                onClick={handleClickShowPassword}
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
            Log in
          </Button>
        </FormControl>
        <div className="orElement">
          <hr /> or <hr />{" "}
        </div>
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
        <span className="forgotPassword">Forgotten your password?</span>
      </div>
    </div>
  );
}

export default UserLogin;
