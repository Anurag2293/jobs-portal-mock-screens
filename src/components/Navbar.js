import React from 'react'
import { useNavigate } from "react-router-dom";

import { Box, Typography, Stack } from '@mui/material'
import Button from '@mui/material/Button';

const boxStyle = {
    height: '72px',
    width: '249px',
    mx: '41px',
    mt: '22px',
    mb: '15px'
}

const Navbar = (props) => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/')
    }
    
    return (
        <>
            <Box
                sx={{
                    height: '109px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={boxStyle}
                    onClick={handleOnClick}
                >
                    <Typography
                        variant='h1'
                        sx={{
                            fontFamily: 'Noto Sans Hebrew',
                            fontSize: '36px',
                            fontWeight: 800,
                            lineHeight: '49px',
                            letterSpacing: '0em',
                            textAlign: 'center',
                            color: '#279EF5',
                        }}
                    >
                        JobsPortal
                    </Typography>
                </Box>
                {props.login && <Stack
                    direction={'row'}
                    spacing={2}
                    sx={{ ...boxStyle, width: 'auto'}}
                >
                    <Button variant='text' sx={{ textTransform: 'capitalize', ml: '47px' }}>
                        <Typography sx={{ 
                                fontWeight: 600, 
                                fontSize: '20px', 
                                lineHeight: '27.24px', 
                            }}
                        >
                            Login
                        </Typography>
                    </Button>
                    <Button variant='contained'
                    disableRipple
                    sx={{
                        height: '72px',
                        width: '187px',
                        borderRadius: '10px',
                        ":hover": {
                            backgroundColor: '#0288d1'
                        }
                    }}>
                        <Typography sx={{ fontFamily: 'Noto Sans', fontSize: '24px',  textTransform: 'none',}}>Post a job</Typography>
                    </Button>
                </Stack>}
            </Box>
        </>
    )
}

export default Navbar