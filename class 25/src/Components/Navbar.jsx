import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";





function Navbar() {

    const [open , setOpen] = useState(false)
    const menuoption = [
        {
            text : "Home",
            icon : <HomeIcon/>
        },
        {
            text : "About",
            icon : <InfoIcon/>
        },
        {
            text : "Testimonials",
            icon : <CommentRoundedIcon/>
        },
        {
            text : "Contact",
            icon : <PhoneRoundedIcon/>
        },
        {
            text : "Cart",
            icon : <ShoppingCartRoundedIcon/>
        },
    ]

  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={logo} alt="" />
        </div>
        <div className='navbar-links-container'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
            <a href="">
                <BsCart2 className='navbar-cart-icon'/>
            </a>
            <button className='primary-button'>Booking-Now</button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpen(true)}/>

        </div>
    </nav>
  )
}

export default Navbar