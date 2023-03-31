import React from 'react'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Description from '../components/Description'

const View = () => {
    return (
        <>
            <Navbar login={false} />
            <Header header={'Laravel Developer(Full Time) - Match Company Limited '} />
            <Description />
        </>
    )
}

export default View