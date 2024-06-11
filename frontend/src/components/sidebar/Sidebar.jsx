import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuBook from '@mui/icons-material/MenuBook';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import {Link} from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
            <RamenDiningIcon className='icon'/>
            <span className='logo'>Vigor Ramen.</span>
            </Link>
        </div>
    <hr/>
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>MAIN</p>
                
                <li>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Clients</span>
                </li>
                
                <Link to="/services" style={{textDecoration:"none"}}>
                <li>
                    <MenuBook className='icon'/>
                    <span>Menu</span>
                </li>
                </Link>
                
                <li>
                    <CreditScoreOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                
                
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span>Vendors</span>
                </li>
                
                <p className='title'>USEFUL</p>
                <li>
                    <InsightsOutlinedIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <HubOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
        </div>
    </div>
  )
}

export default Sidebar