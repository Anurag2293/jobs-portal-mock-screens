import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const detailHeadStyles = {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '40px'
}

const detailDescriptionStyles = {
    fontFamily: 'Poppins',
    fontWeight: 300,
    fontSize: '20px',
    lineHeight: '40px',
}

const Details = [
    {
        attribute: 'Minimum Qualification',
        value: 'Bachelor'
    },
    {
        attribute: 'Experience Level',
        value: 'Mid level'
    },
    {
        attribute: 'Experience Length',
        value: '2 years'
    },
    {
        attribute: 'Location',
        value: 'San Francisco, USA'
    },
    {
        attribute: 'Application Deadline',
        value: '12/08/2022'
    },
    {
        attribute: 'Salary Range',
        value: '$ 105,000 - 150,000'
    }
]

const Requirements = [
    'A degree in programming, computer science, or a related field.',
    'Experience working with PHP, performing unit testing, and managing APIs such as REST.',
    'A solid understanding of application design using Laravel.',
    'Knowledge of database design and querying using SQL.',
    'Proficiency in HTML and JavaScript.Experience developing in Vue is considered a plus.',
    'Practical experience using the MVC architecture.',
    'The ability to work on LAMP development environment',
    'Problem - solving skills and critical mindset.',
    'Great communication skills.',
    'The desire and ability to learn.',
]

const Responsibilities = [
    'Discussing project aims with the client and development team.',
    'Designing and building web applications using Laravel.',
    'Troubleshooting issues in the implementation and debug builds.',
    'Working with front - end and back - end developers on projects.',
    'Testing functionality for users and the backend.',
    'Ensuring that integrations run smoothly.',
    'Scaling projects based on client feedback.',
    'Recording and reporting on work done in Laravel.',
    'Maintaining web - based applications.',
    'Presenting work in meetings with clients and management.',
]

const Description = () => {
    return (
        <>
            <Box
                sx={{
                    pt: '12px', pl: '88px', pr: '54px'
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                >
                    <Button variant='contained' disableRipple sx={{
                        borderRadius: '10px',
                        ":hover": {
                            backgroundColor: '#0288d1'
                        },
                        height: '56px',
                        width: '152px',
                        py: '8px',
                    }}>
                        <Typography
                            sx={{ fontFamily: 'Poppins', fontSize: '20px', lineHeight: '40px', fontWeight: 400 }}
                        >
                            Edit Job
                        </Typography>
                    </Button>
                </Stack>

                <Stack
                    alignItems="flex-start"
                    height="249px"
                    width="658px"
                >
                    {Details.map((detail, index) => (
                        <Stack key={index} direction="row" spacing={1} alignContent="end" alignItems="self-end">
                            <Typography sx={detailHeadStyles}>{detail.attribute}:</Typography>
                            <Typography sx={detailDescriptionStyles}>{detail.value}</Typography>
                        </Stack>
                    ))}
                </Stack>

                <Box
                    height="58px"
                    sx={{ mt: '1rem' }}
                >
                    <Typography
                        sx={{
                            ...detailHeadStyles,
                            fontWeight: 700,
                            lineHeight: '30px'
                        }}
                    >
                        Job description
                    </Typography>
                </Box>

                <Box
                    sx={{ p: 0, m: 0 }}
                >
                    <Box>
                        <br />
                        <Typography sx={detailDescriptionStyles}>
                            We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business.
                        </Typography>
                        <br />
                        <Typography sx={detailDescriptionStyles}>
                            To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce complete solutions in a short turnaround time.
                        </Typography>
                        <br />
                    </Box>

                    <Typography sx={{ ...detailDescriptionStyles, fontWeight: 600, my: '1.5rem' }}> Laravel Developer Requirements:</Typography>
                    <List sx={{
                        listStyleType: 'disc',
                        ml: 2,
                        '& .MuiListItem-root': {
                            display: 'list-item'
                        },
                    }}>
                        {Requirements.map((requirement, index) => (
                            <ListItem key={index}><Typography sx={detailDescriptionStyles}>
                                {requirement}
                            </Typography></ListItem>
                        ))}
                    </List>

                    <Typography sx={{ ...detailDescriptionStyles, fontWeight: 600 }}>Responsibilities</Typography>
                    <List sx={{
                        listStyleType: 'disc',
                        ml: 2,
                        '& .MuiListItem-root': {
                            display: 'list-item'
                        },
                    }}>
                        {Responsibilities.map((responsibility, index) => (
                            <ListItem key={index}><Typography sx={detailDescriptionStyles}>
                                {responsibility}
                            </Typography></ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default Description