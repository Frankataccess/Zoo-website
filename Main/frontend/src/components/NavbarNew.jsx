// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// export default function PositionedMenu() {
// const [anchorEl, setAnchorEl] = React.useState(null);
// const open = Boolean(anchorEl);
// const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
// };
// const handleClose = () => {
//     setAnchorEl(null);
// };

// return (
// <div>
// <Button
//     id="demo-positioned-button"
//     aria-controls={open ? 'demo-positioned-menu' : undefined}
//     aria-haspopup="true"
//     aria-expanded={open ? 'true' : undefined}
//     onClick={handleClick}
// >
//     Dashboard
// </Button>
// <Menu
//     id="demo-positioned-menu"
//     aria-labelledby="demo-positioned-button"
//     anchorEl={anchorEl}
//     open={open}
//     onClose={handleClose}
//     anchorOrigin={{
//     vertical: 'top',
//     horizontal: 'left',
//     }}
//     transformOrigin={{
//     vertical: 'top',
//     horizontal: 'left',
//     }}
// >
//     <MenuItem onClick={handleClose}>Profile</MenuItem>
//     <MenuItem onClick={handleClose}>My account</MenuItem>
//     <MenuItem onClick={handleClose}>Logout</MenuItem>
// </Menu>
// </div>
// );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/Paw print.svg"
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
    // <Box>
    //   <CssBaseline />
    //   {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    //     <Toolbar>        
    //         <Typography variant="h6" noWrap component="div">
    //             Clipped drawer
    //         </Typography>
    //     </Toolbar> */}
    //   <header className="flex items-center back bg-slate-400/20 text-slate-900">
    //     <h1 className="grow">uabufiu</h1>
    //     {/* <div>
    //       <Button
    //         id="demo-positioned-button"
    //         aria-controls={open ? "demo-positioned-menu" : undefined}
    //         aria-haspopup="true"
    //         aria-expanded={open ? "true" : undefined}
    //         onClick={handleClick}
    //       >
    //         Account
    //       </Button>
    //       <Menu
    //         id="demo-positioned-menu"
    //         aria-labelledby="demo-positioned-button"
    //         anchorEl={anchorEl}
    //         open={open}
    //         onClose={handleClose}
    //         anchorOrigin={{
    //           vertical: "top",
    //           horizontal: "left",
    //         }}
    //         transformOrigin={{
    //           vertical: "top",
    //           horizontal: "left",
    //         }}
    //       >
    //         <MenuItem onClick={handleClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleClose}>My account</MenuItem>
    //         <MenuItem onClick={handleClose}>Logout</MenuItem>
    //       </Menu>
    //     </div> */}
    //   </header>

    //   {/* </AppBar> */}
    //   {content}
    // </Box>


    <header className="bg-slate-400/20 text-slate-900">
    <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/home ">
        <img src={logo} className="h-12 w-12"/>
        </Link>
        <Link to="/home">
        <div className="text-4xl text-center font-bold text-slate-900 ">Riglet Zoo</div>
        </Link>
        {/* Navigation */}
        <nav className="space-x-4">
        <Link to="/Events">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Events
        </a>
        </Link>
        <Link to="/Tickets">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Tickets
        </a>
        </Link>
        <Link to="/Hotel">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Hotel
        </a>
        </Link>
        <Link to="/Facilities">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Facilities
        </a>
        </Link>
        <Link to="/Account">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Account
        </a>
        </Link>
        <Link to="/Cart">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Cart
        </a>
        </Link>
        <Link to="/Animals">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Animals
        </a>
        </Link>
        </nav>
        
    </div>
    </header>
  );
}
