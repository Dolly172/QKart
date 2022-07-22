import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const isLoggedIn = () => {
  //   if (localStorage.getItem('token') !== null)
  //   {
  //     setLoggedIn(true);
  //   }
  // }
 
  
  const history = useHistory();

   const logOut = () => {
     localStorage.clear();
     window.location.reload();
     return history.push("/");
  }

  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
       
        {children}

        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/")}
          
        >
          Back to explore
        </Button>
        
        
       
      </Box>

    )

  }
  return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      
      {localStorage.getItem('token')
        ?
        <Stack direction="row" spacing={2}>
          <Avatar src="public/avatar.png" alt={localStorage.getItem('username')} />
          <div className="padding">{localStorage.getItem('username')}</div>

          <Button onClick={() => logOut()} variant= 'text'>LOGOUT</Button>
        </Stack>
        :
        <Stack direction="row" spacing={1.5} variant='text'>
          <Button variant='text' onClick={() => history.push("/login", { from: "Register" })}>LOGIN</Button>
          <Button variant='contained' onClick={() => history.push("/register", { from: "Register" })}>REGISTER</Button>
        </Stack>
      }
   </Box>
  )};

export default Header;
