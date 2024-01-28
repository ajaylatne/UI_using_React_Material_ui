import { Grid, TextField, Button, Box , Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SendPasswordResetEmail() {
    const [error, setError] = useState({status: false, msg: '', type:''});
    const nav = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
        }
        if (actualData.email){
            console.log(actualData)
            document.getElementById('password_email_form').reset();
            setError({status: true, msg:'Login Success', type:"success"})
            nav('/reset_password')
        }else{
            setError({status: true, msg:'Plz provide valid Email', type:"error"})
        }
    }

  return (
    <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
            <Box component='form' noValidate sx={{ mt: 2 }} id='password_email_form' onSubmit={handleSubmit}>
            <TextField 
                    required fullWidth 
                    id="email" 
                    name="email"
                    label="Email Address"
                    margin="normal"
                />

            <Box textAlign="center">
                    <Button type="submit" variant="contained">Send</Button>
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

export default SendPasswordResetEmail
