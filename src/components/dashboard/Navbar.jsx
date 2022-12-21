import { AppBar, Toolbar, Typography } from '@mui/material';
// import './dashboard.css';
const Navbar = () => {
    return(
        <div>
            <AppBar className='navbar' position='static' sx={{
                backgroundColor: 'blue',
            }}>
                <Toolbar>
                    <Typography variant='h4' component='div'>
                        MoneyFlow
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;