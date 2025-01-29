import ValentinesEvent from '../../assets/Valentines day zoo.jpg'
import SpookySpider from '../../assets/spooky spider.png'
import AxiosInstance from '../AxiosInstance'
import {React, useEffect, useMemo, useState} from 'react'
import {Box} from '@mui/material'
import NavbarNew from '../NavbarNew'
import lion from '../../assets/lion.jpg'
import Carousel from '../Carousel'
import MediaCard from '../MediaCard'
import Footer from '../Footer'


const Events = () =>{

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

    const EventsSlides = [
        {
            title: "Valentines day",
            description: "Fall in love with our animals",
            image: ValentinesEvent,
            buttonText: "Tickets",
            link: "/tickets", // Route to the "About" page

            },
            {
            title: "King of the jungle",
            description: "Get up close with the king of the jungle",
            image: lion,
            buttonText: "Tickets",
            link: "/tickets", // Route to the "About" page
            },
            {
            title: "Halloween",
            description: "Spooky spiders!",
            image: SpookySpider,
            buttonText: "Tickets",
            link: "/tickets", // Route to the "About" page
            },
        ];

    return(
    <div className="min-h-screen">
        <NavbarNew/>
        <main>
        <Carousel slides={EventsSlides} autoplay={true} interval={5000}>
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
        <Footer/>
    </div>
    )
}

export default Events

