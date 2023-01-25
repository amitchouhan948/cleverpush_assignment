import { Button, Card, Flex, Image, Input, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Imagecard from './Imagecard'


const Homepage = () => {

    const [data,setData]=useState(false)

    const [query,setQuery]=useState("") 

    

    useEffect(()=>{

    getData()
    
    },[])


    const getData= async()=>{

        let res=await axios.get("https://pixabay-backend.onrender.com/search")
    
        let y=[...res.data.hits]
        setData(y)

    
    
     }

     const getSearchResult=async()=>{

        let res=await axios.get(`https://pixabay-backend.onrender.com/search?q=${query}`)
        console.log(query)
        console.log(res.data.hits)
        setData([...res.data.hits])
     }


  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" width="100%" m={'auto'} pt="10px" pb="5px" bgColor={"black"} pl="20px" pr="20px">

        <Image width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/300px-Pixabay-logo-new.svg.png" alt="logo" />

        <Flex>
            <Input onChange={(e)=>setQuery(e.target.value)} mr="20px" bgColor={"white"} placeholder="Search Anything" />
            <Button onClick={()=>getSearchResult()}>Search</Button>
        </Flex>



    </Flex>
        <SimpleGrid columns={4} spacing={10} m="auto" width="95%" mt="20px">

             {data &&   data.map((el)=><Imagecard pic={el.webformatURL}/>)}

        </SimpleGrid>
    </>
  )
}

export default Homepage