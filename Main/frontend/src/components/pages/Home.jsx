import AxiosInstance from '../AxiosInstance'
import {React, useEffect, useMemo, useState} from 'react'
import {Box} from '@mui/material'
import NavbarNew from '../NavbarNew'
import lion from '../../assets/lion.jpg'
import Carousel from '../Carousel'

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

    const homeSlides = [
        {
            title: "Welcome to Riget Zoo!",
            description: "Experience the wonders of wildlife.",
            image: lion,
            buttonText: "Learn More",
            link: "/tickets", // Route to the "About" page

            },
            {
            title: "Discover Exotic Animals",
            description: "See animals from all around the globe.",
            image: lion,
            },
            {
            title: "Plan Your Visit",
            description: "Get your tickets today!",
            image: lion,
            },
        ];

    return(
    <div className="min-h-screen">
        <NavbarNew />
        <main>
        <Carousel slides={homeSlides} autoplay={true} interval={5000}>
        </Carousel>
        </main>
    </div>
    )

}

export default Home

