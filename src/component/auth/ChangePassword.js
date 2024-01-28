import { Grid, TextField, Button, Box , Alert, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const [error, setError] = useState({status: false, msg: '', type:''});
    const nav = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            password2: data.get('password2')
        }
        if (actualData.password && actualData.password2){
            if(actualData.password === actualData.password2){
                console.log(actualData)
                document.getElementById('change_password_form').reset();
                setError({status: true, msg:'Password Saved', type:"success"})
                setTimeout(()=>{nav('/loginreg')}, 3000)
                
            }else{
                setError({status: true, msg:'Both password and Confirm password should be same', type:"error"})
            }
        }
        else{
            setError({status: true, msg:'Plz enter password', type:"error"})
        }
    }

  return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                maxWidth: 600,
                mx: 4
                }}>
            <h1>Change Password Form</h1>
            <Box component='form' noValidate sx={{ mt: 2 }} id='change_password_form' onSubmit={handleSubmit}>
            <TextField 
                    required fullWidth 
                    id="password" 
                    name="password"
                    label="New Password"
                    margin="normal"
                    type='password'
            />

            <TextField 
                    required fullWidth 
                    id="password2" 
                    name="password2"
                    label="Confirm New Password"
                    margin="normal"
                    type='password'
            />

            <Box textAlign="center">
                    <Button type="submit" variant="contained">Change Password</Button>
            </Box>

                {
                    error.status?
                    <Alert severity={error.type} sx={{mt: 2}}>
                        {error.msg}
                    </Alert>:
                    ''
                }

            </Box>
        </Box>
  )
}

export default ChangePassword