import AxiosInstance from '../AxiosInstance'
import {React, useEffect, useMemo, useState} from 'react'
import {Box} from '@mui/material'
import NavbarNew from '../NavbarNew'
import lion from '../../assets/lion.jpg'


const Home = () =>{

    const [myData, setMyData] = useState()
    const [loading,setLoading] = useState(true)

    const GetData = () => {
        AxiosInstance.get(`users/`).then((res) =>{
            setMyData(res.data)
            console.log(res.data)
            setLoading(false)
        })
    }

    useEffect(() =>{
        GetData();
    },[])

    return(
    <div className="min-h-screen">
        <NavbarNew />
        <main>
            Home
            <div className="w-full">
            <img src={lion} className="object-fit w-screen"/>
            </div>

        </main>
    </div>
    )

}

export default Home

