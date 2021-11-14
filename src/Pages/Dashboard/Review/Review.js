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

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <>
        <h1>Please give your Review</h1>
    <form onSubmit={handleOnSubmit}>
    <Box>
      <div>
       
        <TextField
          id="outlined-multiline-static"
         onChange={handleChange}
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div><br />
     <Button type="submit" variant="contained">Submit Review</Button>
    </Box>
    </form>
    </>
    );
};

export default Review;