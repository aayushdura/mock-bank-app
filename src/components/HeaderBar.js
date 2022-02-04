import React from "react";
import "./headerBar.css";
import bankImage from "../images/download.jpg";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
const HeaderBar = () => {
  const user = useSelector((state) => state.bank.user);
  const styleForIconButton = {
    width: "auto",
    color: "rgb(22, 65, 145)",
    backgroundColor: "antiquewhite",
  };
  const linkStatus =
    user.length === 0
      ? { color: "gray", textDecoration: "line-through" }
      : { color: "white", textDecoration: "none" };

  return (
    <div className="app-bar-container">
      <img src={bankImage} alt="banksymbol" />
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <h1>Bank Of Titan</h1>
      </Link>{" "}
      <span>
        <Link disabled style={linkStatus} to="/deposit">
          Deposit
        </Link>
        <Link style={linkStatus} to="/withdrawl">
          Withdrawl
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/details">
          Details
        </Link>
      </span>
      <IconButton style={styleForIconButton} variant="contained">
        <LoginIcon />
      </IconButton>
    </div>
  );
};

export default HeaderBar;
