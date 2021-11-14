import { Button, Container, Grid } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import car from '../../images/rolls-royce-boat-tail.webp';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <>
        <h3 class="bg-black mt-5 mb-0 p-10 text-white">Contact Us</h3>
        <div class="contact-us">
        <div class="row">
          <div class="col-8 col-md-8 col-xs-12">
              {/* <img style={{width: '75%'}} src={car} alt="" /> */}
              
          </div>
          <div class="col-4 col-md-4 col-xs-12">
            <form class="row g-2">
                <div class="col-md-6 col-xs-12 w-100">
                <label for="inputEmail4" class="form-label">Email</label>
                 <input type="email" class="form-control"/>
                <label  class="form-label">Your Name</label>
                 <input type="text" class="form-control"/>
                 <Button sx={{m:1}} type="submit" variant="contained">Contact Us</Button>
                </div>
            </form>
          </div>
        </div>
      </div>
      </>
       
    );
};

export default ContactUs;