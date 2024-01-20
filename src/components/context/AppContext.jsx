import React, { createContext, useContext, useState } from 'react';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const openSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  return (
    <SnackbarContext.Provider value={{ snackbarOpen, snackbarMessage, openSnackbar, closeSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
