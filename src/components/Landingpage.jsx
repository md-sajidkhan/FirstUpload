import { Button } from '@mui/material'
import { useState } from 'react';
import Loginregistration from './login/Loginregistration';

const Landingpage = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return(
        <div className="landing-page">
            <div className="title">
                <h1>MoneyFlow</h1>
                <p>Know Your Money</p>
                <Button 
                variant='contained' 
                style={{backgroundColor: 'blue', marginTop: '10px'}} 
                className="get-started-btn"
                onClick={handleOpen}>
                    Get Started{'>>'} 
                </Button>
                <Loginregistration open = {open} handleClose = {handleClose}/>
            </div>
        </div>
    )
}

export default Landingpage;