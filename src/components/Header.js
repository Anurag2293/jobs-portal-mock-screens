import React from 'react'

import { Box, Typography } from '@mui/material'

const Header = (props) => {
    return (
        <Box
            sx={{ 
                height: '109px',
                bgcolor: '#F4F5F7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: '30px',
                    fontWeight: 500,
                    lineHeight: '80px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                }}
            >
                {props.header}
            </Typography>
        </Box>
    )
}

export default Header