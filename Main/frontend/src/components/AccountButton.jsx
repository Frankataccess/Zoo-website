import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/Paw print.svg";
import account from "../assets/account.svg";
import burger from "../assets/burger.svg";
const drawerWidth = 240;


export default function AccountButton(props) {
    const { children, icon } = props;
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
      <div>
      <Button
        id="account-dropdown"
        aria-controls={open ? "account-dropdown" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={icon} className="max-h-10 max-w-10" />
      </Button>
      <Menu
        id="account-dropdown"
        aria-labelledby="account-dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {children}
      </Menu>
      </div>
      )
}

