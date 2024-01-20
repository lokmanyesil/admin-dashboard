import * as React from 'react';
import ProfileMenu from '../pages/home/Pages/ProfileMenu'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  
  return (
    /* Search section and profile section in the header */
    <div className="w-full">
      <div className='flex items-center justify-between h-24 shadow-xl shadow-blue-gray-900/1'>
      <div></div>
      <div className='flex items-center space-x-1 '>
        <Badge badgeContent={99} color="error">
          <MailIcon color="action" />
        </Badge>
        <Button onClick={handleLoginClick}>Giriş</Button>
        <ProfileMenu/>          
      </div>      
      </div>       
    </div>
  )
}

export default Header;