import { TextField, Button, Box, Alert, FormControlLabel, Checkbox } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CheckBox } from '@mui/icons-material';

function UserRegister() {

  const [error, setError] = useState({status: false, msg: '', type:''});
  const nav = useNavigate();

  function handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password2: data.get('password2'),
            tc: data.get('tc')
        }

        if (actualData.email && actualData.password && actualData.tc !== null && actualData.name ){
            
            if (actualData.password === actualData.password2){
              console.log(actualData)
              document.getElementById('registration-form').reset();
              setError({status: true, msg:'Login Success', type:"success"})
              // nav('/')
            }else{
              setError({status: true, msg:'password and confirm password doesnt match', type:"error"})
            }
          
        }else{
            setError({status: true, msg:'All Fields are required', type:"error"})
        }
    }


  return (
    
    <Box component='form' noValidate sx={{ mt: 2 }} id='registration-form' onSubmit={handleSubmit}>
        <TextField 
            required fullWidth 
            id="name" 
            name="name"
            label="Name"
            margin="normal"
        />

        <TextField 
            required fullWidth 
            id="email" 
            name="email"
            label="Email ID"
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
        
        <TextField 
            required fullWidth 
            id="password2" 
            name="password2"
            label="Confirm Password"
            margin="normal"
            type="password"
        />
       

       <FormControlLabel  control={<Checkbox value="agree" color="primary" name="tc" id="tc"/>}
          label="I Agree to Terms and Conditions"
          sx={{m: 2}}
       />



       <Box textAlign="center">
            <Button type="submit" variant="contained">Register</Button>
       </Box>

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

export default UserRegister
