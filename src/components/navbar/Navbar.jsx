import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerIcon from '@mui/icons-material/Power';
import LogoutIcon from '@mui/icons-material/Logout'
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import DashboardIcon from '@mui/icons-material/Dashboard'
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function Navbar(props) {
    const { userName } = props
    const navigate = useNavigate()
    const [listItems, setListItems] = React.useState(['Dashboard', 'E3 Apps', 'Demand Response', 'Insights', 'Version History'])
    const handleListCLick = async (index) => {
        // alert(index)
        if (index == 1) {


        }
        // alert(listItems)
    }
    const handleLogout = async () => {
        await localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <Box sx={{ display: 'flex', backgroundColor: "red", }}>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: "#0F123F",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <img style={{ marginleft: "-20vw", borderRadius: "8px", height: "px", width: "35px" }} src="https://source.unsplash.com/user/c_v_r/100x100" />
                            <ListItemText primary={<Typography style={{ color: '#D8DDE5',marginLeft:"2vw" }}>{userName.toUpperCase()}</Typography>} />
                        </ListItemButton>
                    </ListItem>
                </List>


                <List>
                    {listItems.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => handleListCLick(index)}>
                                <ListItemIcon>
                                    {index == 0 && <DashboardIcon htmlColor="white" /> || index == 1 && <PowerIcon htmlColor="white" /> || index == 2 && <SettingsIcon htmlColor="white" />}
                                </ListItemIcon>
                                <ListItemText htmlColor='primary' primary={<Typography style={{ color: '#D8DDE5' }}>{text}</Typography>} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <List>

                    <ListItem disablePadding>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon htmlColor="white" />
                            </ListItemIcon>
                            <ListItemText primary={<Typography style={{ color: '#D8DDE5' }}>Logout</Typography>} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

        </Box>
    );
}