import { Button, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
  <>
  <Flex alignItems="center">

    <Image width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/300px-Pixabay-logo-new.svg.png" alt="logo" />
    
    <Flex>
        <Input></Input>
        <Button>Search</Button>
    </Flex>



  </Flex>
  </>
  )
}

export default Navbar