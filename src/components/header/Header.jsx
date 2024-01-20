import React, { useState } from 'react';
import ProfileMenu from '../pages/home/Pages/ProfileMenu';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isUserAuthenticated = () => {
    // Replace this with your actual authentication check logic
    // For example, you might check if the user has a valid session token
    // or any other authentication mechanism you are using
    return isLoggedIn;
  };

  const handleLoginClick = () => {
    // Simulate login logic
    // In a real application, you would perform authentication and set the state accordingly
    setIsLoggedIn(true);

    // Redirect to the login page
    navigate('/login');
  };

  return (
    /* Search section and profile section in the header */
    <div className="w-full">
      <div className='flex items-center justify-between h-24 shadow-xl shadow-blue-gray-900/1'>
        <div></div>
        <div className='flex items-center space-x-1 '>
          <Button onClick={handleLoginClick}>
            {isUserAuthenticated() ? 'Çıkış' : 'Giriş'}
          </Button>
          {isLoggedIn && <ProfileMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
