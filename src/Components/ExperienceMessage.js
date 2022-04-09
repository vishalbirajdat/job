import { Box, Button, Center, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdBuild } from 'react-icons/md';
function Home() {
    return (
        <Stack
            //   filter='grayscale(80%)'
            background=
            'black center/cover no-repeat'
        >

            <VStack ml={"150px"}  maxW={"668px"} p={"70px"} spacing={1}>

                <Stack insetStart={"true"} p={3}   >
                        <Text fontWeight='normal' letterSpacing={1} color={"white"} fontSize='xl'>
                            REDEFINING MOBILITY EXPERIENCE - MOBILE APP DEVELOPMENT COMPANY
                        </Text>
                    </Stack>


                <Text fontWeight='normal'  spacing={3} letterSpacing={1} p={3} muted color={"gray.600"} fontSize='xl'>
                        
                        Appventurez is a leading mobile app development company in USA & India that focuses on the client’s requirements with the right skills, knowledge, and experience.
                    </Text>


                    
                </VStack>

        </Stack>
    )
}

export default Home