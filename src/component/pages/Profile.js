import {Button, CssBaseline, Typography, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from '../auth/ChangePassword';

function Profile() {
  const nav = useNavigate();

  function handleLogout(){
    console.log('logout');
    nav('/loginreg');
  }  
  return (
    <>
        <CssBaseline />
        <Grid container>
            <Grid item sm={4} sx={{backgroundColor: "gray", color: "white", p: 5}}>
                <h1>User Profile</h1>
                <Typography variant='h6'>Email: sonam@gmail.com</Typography>
                <Typography variant='h6'>Name: sonam</Typography>
                <Button 
                    variant='contained' 
                    color='warning' 
                    size="large"
                    sx={{mt:2}}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Grid>

            <Grid item sm={6}>
                <ChangePassword />
            </Grid>

        </Grid>
    </>
  )
}

export default Profile
