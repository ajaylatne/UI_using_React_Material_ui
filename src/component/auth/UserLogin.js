import { TextField, Button, Box, Alert } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';





function UserLogin() {
    
  const [error, setError] = useState({status: false, msg: '', type:''});
  const nav = useNavigate();

  function handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        if (actualData.email && actualData.password){
            console.log(actualData)
            document.getElementById('login-form').reset();
            setError({status: true, msg:'Login Success', type:"success"})
            
            nav('/profile')
        }else{
            setError({status: true, msg:'All Fields are required', type:"error"})
        }
    }


  return (
    <Box component='form' noValidate sx={{ mt: 2 }} id='login-form' onSubmit={handleSubmit}>
       <TextField 
            required fullWidth 
            id="email" 
            name="email"
            label="Email Address"
            margin="normal"
        />
        
        <TextField 
            required fullWidth 
            id="password" 
            name="password"
            label="Password"
            margin="normal"
            type="password"
        />
       
       
       <Box textAlign="center">
            <Button type="submit" variant="contained">Login</Button>
       </Box>
       <NavLink to='/password_reset_mail'> Forgot Password ? </NavLink>

        {
            error.status?
            <Alert severity={error.type} sx={{mt: 2}}>
                {error.msg}
            </Alert>:
            ''
        }

    </Box>
  )
}

export default UserLogin
