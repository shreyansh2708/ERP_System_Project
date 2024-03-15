import React from 'react'
import "./Header.css"
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Header() {

    const navigate = useNavigate();

    const[isOpen, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!isOpen);
    };   

    const dashBoard = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const product = (e) => {
        e.preventDefault();
        navigate("/productManagement");
    }

    const orders = (e) => {
        e.preventDefault();
        navigate("/orderManagement");
    }

    const calendar = (e) => {
        e.preventDefault();
        navigate("/calendar");
    }


  return (
    <div className='home-container'>
        <div className='header'>
            <div className='left-ele'>
                <h1 className='text'>ERP Panel</h1>
            </div>
            <div className='right-ele'>
                <MarkUnreadChatAltIcon className='noti-icon' />
            </div>
            
        </div>
        <div className={`sidebar ${isOpen ? 'open' : 'not-open'}`}>
            <div className='sidebar-ele'>
            <span onClick={dashBoard}><HomeIcon className='icons'/>DashBoard</span>
            <span onClick={product}><Inventory2Icon className='icons'/>Product Management</span>
            <span onClick={orders}><ShoppingCartIcon className='icons'/>Orders Management</span>
            <span onClick={calendar}><CalendarMonthIcon className='icons'/>Orders Calendar</span>
            </div>
        </div>
        <div className='toggle-menu' onClick={toggleSidebar}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
  )
}

export default Header;