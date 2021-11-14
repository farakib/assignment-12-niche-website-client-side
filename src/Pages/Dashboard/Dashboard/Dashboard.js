import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddCar from '../AddCar/AddCar';
import useAuth from '../../../Hooks/useAuth';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';



const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
 const {admin, logOut} =useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <NavLink style={{color:'black'}} to="/home"><Button color="inherit">Home</Button></NavLink><br />
      <NavLink style={{color:'black'}} to="/explores"><Button color="inherit">More Cars</Button></NavLink><br />
      <NavLink style={{color:'black'}} to={`${url}`}><Button color="inherit">Dashboard</Button></NavLink><br />
      {admin && <Box>
        <NavLink style={{color:'black'}} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></NavLink><br />
      <NavLink style={{color:'black'}} to={`${url}/addCar`}><Button color="inherit">Add A Car</Button></NavLink>
      </Box>}
      <NavLink style={{color:'black'}} to={ `${url}/pay` }><Button color="inherit">Pay</Button></NavLink><br />
      <NavLink style={{color:'black'}} to={`${url}/review`}><Button color="inherit">Review</Button></NavLink><br />
      <NavLink style={{color:'black'}} to={`${url}/myOrders`}><Button color="inherit">my orders</Button></NavLink><br />
      <Button onClick={logOut} color="inherit">LogOut</Button>

      <List>
        {[].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <Route path={`${path}/addCar`}>
         <AddCar></AddCar>
        </Route>
        <Route path={`${path}/pay`}>
         <Pay></Pay>
        </Route>
        <Route path={`${path}/review`}>
         <Review></Review>
        </Route>
        <Route path={`${path}/myOrders`}>
         <MyOrders></MyOrders>
        </Route>
      </Switch>
      </Box>
    </Box>
  );
}


Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
