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
import AccountButton from "./AccountButton";
const drawerWidth = 240;

export default function Navbar(props) {
  const { content } = props;
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

  const logoutUser = () => {
    AxiosInstance.post(`logoutall/`, {}).then(() => {
      localStorage.removeItem("Token");
      navigate("/");
    });
  };

  return (
    <header className="bg-slate-400/20 text-slate-900">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          {/* Logo */}
          <Link to="/home ">
            <img src={logo} className="h-10 w-16" />
            <div className="text-4xl text-center font-bold text-slate-900 ">
              Riglet Zoo
            </div>
          </Link>
        </div>
        <AccountButton icon={account}>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                account
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
        </AccountButton>

        <AccountButton icon={burger}>
          
        <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/Events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
        </AccountButton>
      </div>
    </header>
  );
}
