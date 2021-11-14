import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Review = () => {
    const [value, setValue] = React.useState('Controlled');

    const handleOnSubmit = e =>{
       const user = {value}
       console.log(user)
        e.preventDefault();
    }

    const handleOnChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <>
        <h1>Please give your Review</h1>
    <form onSubmit={handleOnSubmit}>
    <Box>
    
      <div>
      <TextField
    sx={{m: 1}}
     onChange={handleOnChange}
     label="your name"
     variant="standard"
     />
        <TextField
          id="outlined-multiline-static"
         onChange={handleOnChange}
          multiline
          rows={4}
          defaultValue="write your review of products"
        />
      </div><br />
     <Button type="submit" variant="contained">Submit Review</Button>
    </Box>
    </form>
    </>
    );
};

export default Review;