import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Imagecard = ({pic}) => {
  return (
  <>
    <Box>
        <Image src={pic} alt="img" />

    </Box>
  
  </>
  )
}

export default Imagecard