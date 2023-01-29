import {Box, Flex, HStack, List, ListIcon, ListItem, Stack, Text} from '@chakra-ui/react';
import {MdCircle} from "react-icons/md";
import React from "react";
import Head from "next/head";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>PIAIC - How It Works</title>
        <meta name="description" content="Presidential Initiative for Artificial Intelligence & Computing - How It Works"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/x-icon" href={'/favicon.png'}/>
      </Head>
      <Flex minW={'full'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Flex minW={'80%'} rounded={'lg'} m={5} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
              direction={'column'} justifyContent={'center'} alignItems={'center'}
              bg={'linear-gradient(90deg, hsla(184, 79%, 13%, 1) 0%, hsla(178, 93%, 18%, 1) 42%, hsla(177, 98%, 20%, 1) 72%)'}>
          <Stack minW={'85%'} maxW={'5xl'} py={8} px={8} spacing={{base: 8, md: 10}} align={'center'}
                 direction={'column'}
                 color={'#ffffff'}>
            <Box textAlign={'center'}>
              <Text fontWeight={600} fontSize={'5xl'}>1</Text>
            </Box>
            <Text fontSize={{base: 'md', md: 'xl'}} textAlign={'justify'} minW={'full'}>
              PIAIC will launch classes in the following locations, one city at a time, in the following order
            </Text>
            <HStack spacing={20} pl={5} w={'full'}>
              <List spacing={3} fontSize={'md'}>
                <ListItem>
                  <ListIcon as={MdCircle} color='#ffffff'/>
                  Karachi
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCircle} color='#ffffff'/>
                  Islamabad
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCircle} color='#ffffff'/>
                  Lahore
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCircle} color='#ffffff'/>
                  Peshawar
                </ListItem>
              </List>
            </HStack>
          </Stack>
        </Flex>
        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}
              minW={'80%'} rounded={'lg'} m={5} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
              bg={'linear-gradient(90deg, hsla(184, 79%, 13%, 1) 0%, hsla(178, 93%, 18%, 1) 42%, hsla(177, 98%, 20%, 1) 72%)'}>
          <Stack minW={'85%'} maxW={'5xl'} py={8} px={8} spacing={{base: 8, md: 10}} align={'center'}
                 direction={'column'}
                 color={'#ffffff'}>
            <Box textAlign={'center'}>
              <Text fontWeight={600} fontSize={'5xl'}>2</Text>
            </Box>
            <Text fontSize={{base: 'md', md: 'xl'}} textAlign={'justify'} maxW={'full'}>
              To participate in the program and become eligible for the most prestigious credentials for AI, Cloud and
              Blockchain technologies in the world, students must complete the following process
            </Text>
            <HStack spacing={20} pl={5} w={'full'}>
              <List spacing={3} fontSize={'md'}>
                <ListItem>
                  <ListIcon as={MdCircle} color='#ffffff'/>
                  Signup at PIAIC Portal
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCircle} color='#ffffff'/>
                  Submit the online application
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCircle} color='#ffffff'/>
                  Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results
                  are
                  determined based on percentile
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCircle} color='#ffffff'/>
                  Pass all PIAIC exams with an average score of at least 70%
                </ListItem>
              </List>
            </HStack>
          </Stack>
        </Flex>
        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}
              minW={'80%'} rounded={'lg'} m={5} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
              bg={'linear-gradient(90deg, hsla(184, 79%, 13%, 1) 0%, hsla(178, 93%, 18%, 1) 42%, hsla(177, 98%, 20%, 1) 72%)'}>
          <Stack minW={'85%'} maxW={'5xl'} py={8} px={8} spacing={{base: 8, md: 10}} align={'center'}
                 direction={'column'}
                 color={'#ffffff'}>
            <Box textAlign={'center'}>
              <Text fontWeight={600} fontSize={'5xl'}>3</Text>
            </Box>
            <Text fontSize={{base: 'md', md: 'xl'}} textAlign={'justify'} maxW={'full'}>
              All programs are one year long in duration. Each program is divided into four quarters (12 weeks each).
              Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6
              sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing,
              Blockchain, Internet of Things, 5G and Software Defined Networking and Quantum Computing. Each class will
              be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.
            </Text>
          </Stack>
        </Flex>
        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}
              minW={'80%'} rounded={'lg'} m={5} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
              bg={'linear-gradient(90deg, hsla(184, 79%, 13%, 1) 0%, hsla(178, 93%, 18%, 1) 42%, hsla(177, 98%, 20%, 1) 72%)'}>
          <Stack minW={'85%'} maxW={'5xl'} py={8} px={8} spacing={{base: 8, md: 10}} align={'center'}
                 direction={'column'}
                 color={'#ffffff'}>
            <Box textAlign={'center'}>
              <Text fontWeight={600} fontSize={'5xl'}>4</Text>
            </Box>
            <Text fontSize={{base: 'md', md: 'xl'}} textAlign={'justify'} maxW={'full'}>
              Those students who wish to participate in the program online can check the distance learning option in the
              application form. Please note that distance learning students must also take proctored exams on site, just
              like the onsite students.

              The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of
              PKR
              3,000, before the start of each quarter.

              The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4
              installments of PKR 1,500, before the start of each quarter.
            </Text>
          </Stack>
        </Flex>
        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}
              minW={'80%'} rounded={'lg'} m={5} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
              bg={'linear-gradient(90deg, hsla(184, 79%, 13%, 1) 0%, hsla(178, 93%, 18%, 1) 42%, hsla(177, 98%, 20%, 1) 72%)'}>
          <Stack maxW={'5xl'} py={8} px={8} spacing={{base: 8, md: 10}} align={'center'} direction={'column'}
                 color={'#ffffff'}>
            <Box textAlign={'center'}>
              <Text fontWeight={600} fontSize={'5xl'}>5</Text>
            </Box>
            <Text fontSize={{base: 'md', md: 'xl'}} textAlign={'justify'} maxW={'full'}>
              Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan.
              Saylani
              has strict audit processes already in place to ensure proper accountability of funds.
            </Text>
          </Stack>
        </Flex>
        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}
              minW={'80%'} rounded={'lg'} m={5} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
              bg={'linear-gradient(90deg, hsla(184, 79%, 13%, 1) 0%, hsla(178, 93%, 18%, 1) 42%, hsla(177, 98%, 20%, 1) 72%)'}>
          <Stack minW={'85%'} maxW={'5xl'} py={8} px={8} spacing={{base: 8, md: 10}} align={'center'}
                 direction={'column'}
                 color={'#ffffff'}>
            <Box textAlign={'center'}>
              <Text fontWeight={600} fontSize={'5xl'}>6</Text>
            </Box>
            <Text fontSize={{base: 'md', md: 'xl'}} textAlign={'justify'} maxW={'full'}>
              Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of
              students
              will be awarded the PIAIC certifications.
            </Text>
          </Stack>
        </Flex>
        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}
              minW={'80%'} rounded={'lg'} m={5} boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
              bg={'linear-gradient(90deg, hsla(184, 79%, 13%, 1) 0%, hsla(178, 93%, 18%, 1) 42%, hsla(177, 98%, 20%, 1) 72%)'}>
          <Stack minW={'85%'} maxW={'5xl'} py={8} px={8} spacing={{base: 8, md: 10}} align={'center'}
                 direction={'column'}
                 color={'#ffffff'}>
            <Box textAlign={'center'}>
              <Text fontWeight={600} fontSize={'5xl'}>7</Text>
            </Box>
            <Text fontSize={{base: 'md', md: 'xl'}} textAlign={'justify'} maxW={'full'}>
              For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM
              -
              6 PM.
              Please note we are closed on Fridays.
              For technical questions related to coursework, you may contact us via email at education@piaic.org.
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
