import { Grid, TextField, Button, Box , Alert, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
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
                document.getElementById('password_form').reset();
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
    <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
            <h1>Reset Form</h1>
            <Box component='form' noValidate sx={{ mt: 2 }} id='password_form' onSubmit={handleSubmit}>
            <TextField 
                    required fullWidth 
                    id="password" 
                    name="password"
                    label="password"
                    margin="normal"
                    type='password'
            />

            <TextField 
                    required fullWidth 
                    id="password2" 
                    name="password2"
                    label="Confirm Password"
                    margin="normal"
                    type='password'
            />

            <Box textAlign="center">
                    <Button type="submit" variant="contained">Submit</Button>
            </Box>

                {
                    error.status?
                    <Alert severity={error.type} sx={{mt: 2}}>
                        {error.msg}
                    </Alert>:
                    ''
                }

            </Box>
        </Grid>
    </Grid>
  )
}

export default ResetPassword
