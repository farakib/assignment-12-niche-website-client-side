import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Footer = () => {
    return (
    <Box sx={{ flexGrow: 1 , backgroundColor: 'black', mt: 10, pt: 5}} >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={6}>
        <Typography sx={{color: 'white'}} variant="h6" gutterBottom component="div">
        SHOWROOM
        <Typography variant="caption" display="block" gutterBottom>
        Theme,789 Main road,Anytown
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        018 610 608 66
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        mon-Fri:09am to 06pm
      </Typography>

      </Typography>
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
        <Typography sx={{color: 'white'}} variant="h6" gutterBottom component="div">
        QUICKS LINKS
        <Typography sx={{textDecoration: 'none'}}>
            <NavLink to="/home" >Home</NavLink>
        </Typography>
        <Typography sx={{textDecoration: 'none'}}>
            <NavLink to="/pay" >Payment</NavLink>
        </Typography>
        <Typography  sx={{textDecoration: 'none'}}>
            <NavLink to="/login">Login</NavLink>
        </Typography>
      </Typography>
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
        <Typography sx={{color: 'white'}} variant="h6" gutterBottom component="div">
        STYLE ADVISOR
        <Typography  sx={{textDecoration: 'none'}}>
            <NavLink to="/">MY Account</NavLink>
        </Typography>
        <Typography  sx={{textDecoration: 'none'}}>
            <NavLink to="/">Information</NavLink>
        </Typography>
        <Typography  sx={{textDecoration: 'none'}}>
            <NavLink to="/">Addresss</NavLink>
        </Typography>
        <Typography  sx={{textDecoration: 'none'}}>
            <NavLink to="/">Discount</NavLink>
        </Typography>
      </Typography>
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
        <Typography sx={{color: 'white'}} variant="h6" gutterBottom component="div">
        Information
        <Typography sx={{textDecoration: 'none'}}>
            <NavLink to="/contactUs">Contact Us</NavLink>
        </Typography>
      </Typography>
        </Grid>
      </Grid>
    </Box>
    );
};

export default Footer;