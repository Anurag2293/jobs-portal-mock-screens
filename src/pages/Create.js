import React from 'react'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Create = () => {
    return (
        <>
            <Navbar login={true}   />
            <Header header={'Create a Job'} />
            <Form submitButtonText={"Create Job"} />
            <Footer />
        </>
    )
}

export default Create