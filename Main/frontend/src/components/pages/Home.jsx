import AxiosInstance from '../AxiosInstance'
import {React, useEffect, useMemo, useState} from 'react'
import {Box} from '@mui/material'
import NavbarNew from '../NavbarNew'
import lion from '../../assets/lion.jpg'
import Carousel from '../Carousel'
import MediaCard from '../MediaCard'

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
            buttonText: "Tickets",
            link: "/tickets", // Route to the "About" page

            },
            {
            title: "Discover Exotic Animals",
            description: "See animals from all around the globe.",
            image: lion,
            buttonText: "Tickets",
            link: "/tickets", // Route to the "About" page
            },
            {
            title: "Plan Your Visit",
            description: "Get your tickets today!",
            image: lion,
            buttonText: "Tickets",
            link: "/tickets", // Route to the "About" page
            },
        ];

    return(
    <div className="min-h-screen">
        <NavbarNew/>
        <main>
        <Carousel slides={homeSlides} autoplay={true} interval={5000}>
        </Carousel>
        <h1 className='text-3xl md:text-center pt-5'>
            Welcome to Riget zoo
        </h1>
        <div className='md:text-center'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a minima reiciendis earum dignissimos nulla? Enim inventore aliquid animi voluptas! Cum placeat fugit exercitationem. Omnis in ex laborum adipisci obcaecati reiciendis ut quod totam nemo aspernatur? Nostrum ipsum nemo ab. Ex, quibusdam accusamus? Doloremque laboriosam aliquid, inventore odit ipsum debitis.
        </div>
        <div className="flex items-center justify-center">
            <img src={lion} className="h-60 w-auto" alt="Lion" />
        </div>

        </main>
    </div>
    )
}

export default Home

