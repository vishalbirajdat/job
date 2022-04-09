import { Box, Button, Center, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdBuild } from 'react-icons/md';
function Home() {
  return (
      <Stack  
        //   filter='grayscale(80%)'
        backdropFilter='invert(100%)'
            background=
                    'url(https://www.appventurez.com/assets/Images/banner-back.jpg) center/cover no-repeat'
          >

          <Center h={"100vh"} boxShadow='outline' rounded='md'>
              <VStack maxW={"668px"} spacing={1}>
                  <Text fontWeight='bold' p={3} letterSpacing={1} color={"white"} fontSize='7xl'>RPML Technology Web Development Company</Text>

                  <Stack insetStart={"true"} p={3} w={"668px"} >
                      <Text fontWeight='semibold' letterSpacing={1} color={"white"} fontSize='2xl'>
                      Values | Technology | Flawless Experience
                </Text>
                  </Stack>


                  <Text fontWeight='normal' spacing={3} letterSpacing={1} p={3}  color={"white"} fontSize='md'>
                      Bridging the gap between ideas and reality with transformative, compelling, and innovative websites web development. We deliver top-notch websites web services covering all the platforms, users, and industries.
                  </Text>


                  <Stack direction='row' w={"668px"} spacing={4} mt={4}>
                      <Button leftIcon={<MdBuild />} mt={7} colorScheme='pink' variant='solid'>
                          Services
                      </Button>
                     
                  </Stack>
        </VStack>
          </Center>

    </Stack>
  )
}

export default Home