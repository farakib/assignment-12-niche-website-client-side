import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BuyingModal = ({openBuying, handleBuyingClose, product}) => {
   const {name, price}= product;
   const{user} =useAuth();
   const initialInfo = {userName: '', email: user.email, phone: ''}
   const [buyingInfo, setBuyingInfo] = useState(initialInfo);

  const handleOnBlur = e =>{
    const field  = e.target.name;
    const value = e.target.value;
    const newInfo = {...buyingInfo};
    newInfo[field]= value;
    console.log(newInfo);
    setBuyingInfo(newInfo);
  }

   const handleBuyingSubmit = e =>{

    // 
     const car ={
       ...buyingInfo,
       price,
       carName: name
     }

    //server
    fetch('http://localhost:5000/cars',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId){
        alert('Successfully Booked your buying Car.We Will notified you in your email.')
        handleBuyingClose();
      }
    })


   
    e.preventDefault();
   }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBuying}
        onClose={handleBuyingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBuying}>
          <Box sx={style}> 
            <Typography sx={{textAlign: 'center', mb: 1}} id="transition-modal-title" variant="h5" component="h2">
             Please Booked your Car
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             Model: {name}
            </Typography>
          <form onSubmit={handleBuyingSubmit}>
          <TextField
          disabled
          sx={{width: '90%', m: 1}}
          label="price"
          id="outlined-size-small"
          defaultValue={price}
          size="small"
        />
          <TextField
          sx={{width: '90%', m: 1}}
    
          id="outlined-size-small"
          name="userName"
          onBlur={handleOnBlur}
          defaultValue="your name"
          size="small"
        />
          <TextField
          sx={{width: '90%', m: 1}}
          required
          name="email"
          onBlur={handleOnBlur}
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
        />
          <TextField
          sx={{width: '90%', m: 1}}
          name="phone"
          onBlur={handleOnBlur}
          id="outlined-size-small"
          defaultValue="Enter Your phone"
          size="small"
        />
        <Button type="submit" variant="contained">Buy</Button>
          </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BuyingModal;