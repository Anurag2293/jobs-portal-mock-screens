import React from 'react'
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                    m: '2rem'
                }}
            >

            <Typography
                variant='h4'
            >
                Welcome, this is a Frontend Developer Intern - Task Assignment for Lean Platforms.
            </Typography>
            <Typography>            
                It has mocks for the Assigned Screens
            </Typography>
            <Typography>            
                Submitted By: Anurag Rajendra Dhote
            </Typography>
            <Typography>            
                Email Address : anuragdhote392@gmail.com
            </Typography>
            
            <Typography>
                <a href="https://www.figma.com/file/y4A2zoe8BMi0170BYeEWjY/Create-Listing?node-id=0-1&t=uAvf6W8yoYAqSX2K-0" target="blank">Figma Design Link</a>
            </Typography>

            <hr />

            <Stack
                my={'1rem'}
                spacing={2}
                direction="row"
            >
                <Button
                    disableRipple
                    variant='contained'
                    onClick={() => { navigate('/create')}}
                    sx={{
                        width: '200px',
                        height: '40px',
                        ":hover": {
                            backgroundColor: '#0288d1'
                        }
                    }}
                >Create Screen</Button>
                <Button
                    disableRipple
                    variant='contained'
                    onClick={() => { navigate('/edit')}}
                    sx={{
                        width: '200px',
                        height: '40px',
                        ":hover": {
                            backgroundColor: '#0288d1'
                        }
                    }}
                >Edit Screen</Button>
                <Button
                    disableRipple
                    variant='contained'
                    onClick={() => { navigate('/view')}}
                    sx={{
                        width: '200px',
                        height: '40px',
                        ":hover": {
                            backgroundColor: '#0288d1'
                        }
                    }}
                >View Screen</Button>
            </Stack>
            </Box>
        </>
    )
}

export default Home