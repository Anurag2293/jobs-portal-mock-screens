import React from 'react'

import { Stack, Typography } from '@mui/material'

const Footer = () => {
    return (
        <>
            <Stack
                justifyContent="center"
                direction="row"
            >
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '80px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                    }}
                >
                © 2022 Jobs Portal. Designed By Wilson Kinyua.
                </Typography>
            </Stack>
        </>
    )
}

export default Footer