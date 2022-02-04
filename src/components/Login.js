import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./login.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/action-creators/actionCrt";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const handleChange = (prop) => (event) => {
    setUserDetails({ ...userDetails, [prop]: event.target.value });
  };
  const handelSubmit = () => {
    dispatch(registerUser(userDetails));
    navigate("/details");
  };
  return (
    <div className="login-container">
      <form>
        <h3>Register</h3>
        <TextField
          helperText="Enter Your Full Name"
          size="large"
          variant="standard"
          id="fullname"
          label="Full Name"
          values={userDetails.fullName}
          onChange={handleChange("fullName")}
        ></TextField>
        <TextField
          helperText="Enter Your Email"
          size="large"
          variant="standard"
          id="email"
          label="Email"
          values={userDetails.email}
          onChange={handleChange("email")}
        ></TextField>
        <TextField
          variant="standard"
          helperText="Enter Secure Password"
          label="Password"
          type="password"
          values={userDetails.password}
          onChange={handleChange("password")}
        ></TextField>
        <TextField
          variant="standard"
          helperText="Re-Enter Your Password"
          label="Confirm Password"
          type="password"
          values={userDetails.confirmPonChange}
          onChange={handleChange("confirmPassword")}
        ></TextField>
        <TextField
          helperText="Enter Your Address"
          size="large"
          variant="standard"
          id="address"
          label="Address"
          values={userDetails.address}
          onChange={handleChange("address")}
        ></TextField>
        <Button
          style={{
            width: "auto",
            margin: "4ch auto",
            backgroundColor: "rgb(22, 65, 145)",
          }}
          onClick={handelSubmit}
          variant="contained"
          endIcon={<HowToRegIcon />}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Login;
