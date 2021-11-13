import * as React from 'react';
import { Typography } from '@mui/material';
import Cars from '../../Cars/Cars';

const DashboardHome = () => {
    return (
        <div>
        <Typography paragraph>
        <Cars></Cars>
        </Typography>
        </div>
    );
};

export default DashboardHome;