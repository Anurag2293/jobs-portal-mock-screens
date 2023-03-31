import React, { useState } from 'react'

import { Box, Button, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const labelBoxStyles = {
    width: '266px',
    height: '80px',

    fontFamily: 'Poppins',
    fontSize: '25px',
    fontWeight: 500,
    lineHeight: '80px',
    letterSpacing: '0em',
    textAlign: 'left',
}

const Form = (props) => {
    const [jobCat, setJobCat] = useState(10)
    const [jobType, setJobType] = useState(10)

    return (
        <>
            <Box
                sx={{
                    mt: '25px', mb: '62px', ml: '27px', mr: '35px',
                    border: '1px solid #D6D6D6',
                    py: '20px', pl: '47px', pr: '39px'
                }}
            >
                <Stack
                    direction="row"
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Typography sx={labelBoxStyles}>Company Name</Typography>
                        <TextField sx={{ width: '680px' }} placeholder="Name" />
                    </Box>
                    <Box>
                        <Typography sx={labelBoxStyles}>Company Website</Typography>
                        <TextField sx={{ width: '629px' }} placeholder="Website Link" />
                    </Box>
                </Stack>

                <Stack>
                    <Typography sx={labelBoxStyles}>Job Title</Typography>
                    <TextField fullWidth placeholder="Title" />
                </Stack>

                <Stack
                    direction="row"
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Typography sx={labelBoxStyles}>Job Category</Typography>
                        <Select
                            value={jobCat}
                            onChange={(event) => { setJobCat(event.target.value) }}
                            sx={{ width: '680px' }}
                        >
                            <MenuItem value={10}>Technology</MenuItem>
                            <MenuItem value={20}>Commerce</MenuItem>
                            <MenuItem value={30}>Medical</MenuItem>
                        </Select>
                    </Box>
                    <Box>
                        <Typography sx={labelBoxStyles}>Job Type</Typography>
                        <Select
                            value={jobType}
                            onChange={(event) => { setJobType(event.target.value) }}
                            sx={{ width: '629px' }}
                        >
                            <MenuItem value={10}>Full Time</MenuItem>
                            <MenuItem value={30}>Part Time</MenuItem>
                            <MenuItem value={20}>Internship</MenuItem>
                        </Select>
                    </Box>
                </Stack>

                <Stack
                    direction="row"
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Typography sx={labelBoxStyles}>Job Location</Typography>
                        <TextField sx={{ width: '680px' }} placeholder="Location" />
                    </Box>
                    <Box>
                        <Typography sx={labelBoxStyles}>Salary Range</Typography>
                        <TextField sx={{ width: '629px' }} placeholder="Salary Range" />
                    </Box>
                </Stack>

                <Stack
                    direction="row"
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Typography sx={labelBoxStyles}>Experience</Typography>
                        <TextField sx={{ width: '680px' }} placeholder="Experience" />
                    </Box>
                    <Box>
                        <Typography sx={labelBoxStyles}>Qualification</Typography>
                        <TextField sx={{ width: '629px' }} placeholder="Qualification" />
                    </Box>
                </Stack>

                <Stack>
                    <Typography sx={labelBoxStyles}>Application Deadline</Typography>
                    <TextField fullWidth placeholder="Job application deadline" />
                </Stack>

                <Stack>
                    <Typography sx={labelBoxStyles}>Job Application Link</Typography>
                    <TextField fullWidth placeholder="Job application link url" />
                </Stack>

                <Stack>
                    <Typography sx={labelBoxStyles}>Job Description</Typography>
                    <TextField fullWidth multiline rows={10} placeholder="Job Description" />
                </Stack>

                <Stack direction={'row'} justifyContent="flex-end">
                    <Button variant='contained'
                        disableRipple
                        sx={{
                            height: '72px',
                            borderRadius: '10px',
                            mt: '29px',
                            ":hover": {
                                backgroundColor: '#0288d1'
                            }
                        }}>
                        <Typography sx={{ fontFamily: 'Inter', fontSize: '29px', fontWeight: 700}}>{props.submitButtonText}</Typography>
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default Form