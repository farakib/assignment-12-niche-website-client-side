import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import TextField from '@mui/material/TextField';

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
   const {name, price, img}= product;

   const handleBuyingSubmit = e =>{
    alert('submitted')

    // 

    //

    handleBuyingClose();
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
          defaultValue="Enter Your Name"
          size="small"
        />
          <TextField
          sx={{width: '90%', m: 1}}
          
          id="outlined-size-small"
          defaultValue="Enter Your Email"
          size="small"
        />
          <TextField
          sx={{width: '90%', m: 1}}
          
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