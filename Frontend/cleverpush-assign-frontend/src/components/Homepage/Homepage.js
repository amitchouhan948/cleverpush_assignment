import { Card, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Imagecard from './Imagecard'


const Homepage = () => {

    const [data,setData]=useState(false)

    useEffect(()=>{

    getData()
    
    },[])


    const getData= async()=>{

        let res=await axios.get("http://localhost:8000/search")
    
        console.log(res.data.hits)
        setData(res.data.hits)

    
    
     }


  return (
    <>
        <SimpleGrid>

             {data &&   data.map((el)=><Imagecard pic={el.webformatURL}/>)}

        </SimpleGrid>
    </>
  )
}

export default Homepage