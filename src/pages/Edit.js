import React from 'react'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Edit = () => {
    return (
        <>
            <Navbar login={false}  />
            <Header header={'Edit Job'} />
            <Form submitButtonText="Update Job"/>
            <Footer />
        </>
    )
}

export default Edit