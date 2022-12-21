import './loginregistration.css';
import { Button, Dialog, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack } from '@mui/system';
import { useState } from 'react';

const Loginregistration = ({ open, handleClose }) => {
    const [userin, setUserin] = useState('');
    const [passin, setPassin] = useState('');
    const [userup, setUserup] = useState('');
    const [passup, setPassup] = useState('');
    const [emailup, setEmailup] = useState('');
    // const [login, setLogin] = useState([]);
    // const [reg, setReg] = useState([]);
    const [signup, setSignup] = useState(false);
    const handleSignin = () => {
        setSignup(false);
    }

    const handleSignup = () => {
        setSignup(true);
        console.log('clicked');
    }

    const submitSignin = () => {
        // setLogin([...login, {
        //     user: userin,
        //     pass: passin,
        // }]);
        alert(`Username: ${userin} and Password: ${passin}`);
    }

    const submitSignup = () => {
        // setReg([...reg, {
        //     user: userup,
        //     pass: passup,
        //     email: emailup,
        // }]);
        alert(`Username: ${userup} and Password: ${passup} and Email: ${emailup}`);
    }
    return(
        <Dialog open={open}>
                <Box className='btnBox'>
                    {handleClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                            zIndex: '2000',
                        }}
                    >
                    <CloseIcon/>
                    </IconButton>
                    ) : null}
                    <Stack margin='0 5px' alignItems='center' className='stack one'>
                        <h4>Already have an Account?</h4>
                        <Button variant='contained' style={{width: '100px', marginTop: '10px', backgroundColor: 'white', color: 'blue'}} onClick={handleSignin}>Sign in</Button>
                    </Stack>
                    <Stack margin='0 5px' alignItems='center' className='stack two'>
                        <h4>Don't have an Account?</h4>
                        <Button variant='contained' style={{width: '100px', marginTop: '10px', backgroundColor: 'white', color: 'blue'}} onClick={handleSignup}>Sign up</Button>
                    </Stack>
                </Box>
                <Box className={`formBox ${signup ? 'active' : ""}`} >
                <Stack direction='column' width='210px' className='form signupform'>
                    <h2 style={{marginLeft: '20px', marginBottom: '10px', letterSpacing: '2px'}}>Registration</h2>
                    <TextField label="Username" variant='outlined'  style={{marginBottom: '15px'}} value={userup} onChange={(e) => setUserup(e.target.value)} required></TextField>
                    <TextField label="Password" variant='outlined' type='password'  style={{marginBottom: '15px'}} value={passup} onChange={(e) => setPassup(e.target.value)} required ></TextField>
                    <TextField label="Email" variant='outlined' type='email'  style={{marginBottom: '15px'}} value={emailup} onChange={(e) => setEmailup(e.target.value)} required></TextField>
                    <Button
                    variant='contained' 
                    style={{backgroundColor: 'blue', marginTop: '10px'}} onClick={submitSignup}>
                        Sign Up
                    </Button>
                </Stack>
                <Stack direction='column' width='210px' className='form signinform'>
                    <h2 style={{ marginBottom: '10px', letterSpacing: '2px', textAlign: 'center'}}>Login</h2>
                    <TextField label="Username" variant='outlined'  style={{marginBottom: '15px'}} value={userin} onChange={(e) => setUserin(e.target.value)} required></TextField>
                    <TextField label="Password" variant='outlined' type='password'  style={{marginBottom: '15px'}} value={passin} onChange={(e) => setPassin(e.target.value)} required></TextField>
                    
                    <Button
                    variant='contained' 
                    style={{backgroundColor: 'blue', marginTop: '10px'}} onClick={submitSignin}>
                        Sign In
                    </Button>
                </Stack>
                </Box> 
        </Dialog>
    )
}

export default Loginregistration;