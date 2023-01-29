import {
  Box,
  Stack,
  HStack,
  Link,
  Divider,
  Text,
  Button,
  IconButton,
  Heading, Flex,
} from '@chakra-ui/react';
import {FaFacebook, FaWhatsapp, FaYoutube} from 'react-icons/fa';
import LOGO from '../assets/images/PIAICLogo.svg';
import PanaCloudLOGO from '../assets/images/panacloud.png';
import Saylani from '../assets/images/saylani.png';
import Image from "next/image";

export const Footer = () => {
  return (
    <Box px={5} py={{base: 5, md: 8}} maxW={{base: "calc(100vw)", md: 'calc(95vw)'}} marginInline="auto">
      <Flex
        justifyContent="space-between"
        direction={{base: 'column', md: 'row'}}
        alignItems={'center'}
      >
        <Flex direction={{base: 'column'}}
              justifyContent={{base: 'center', md: 'center'}}
              alignItems={{base: 'center', md: 'flex-start'}}>
          <Flex direction={{base: 'column', sm: 'row'}} justifyContent={'center'} alignItems={'center'}>
            <Link href="https://www.piaic.org//" isExternal p={3}>
              <LOGO/>
            </Link>
            <Link href="https://www.panaverse.co/" isExternal p={3}>
              <Image src={PanaCloudLOGO} alt={'PanaCloud Logo'} height={100} width={100}/>
            </Link>
            <Link href="/" isExternal p={3}>
              <Image src={Saylani} alt={'Saylani Trust Logo'} height={100} width={100}/>
            </Link>
          </Flex>

        </Flex>
        <Box maxW={{md: 'calc(50vw)'}} mt={{base: 5, md: 0}}>
          <Heading
            as={'h5'}
            fontSize={{base: 'md'}}
            color={'gray.600'}
          >
            About
          </Heading>
          <Text color={'gray.500'} textAlign={'justify'} as={'p'}>
            President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right:
            Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra
            University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan
            Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani
            (President Saylani Welfare Trust). </Text>
        </Box>

      </Flex>

      <Divider my={4}/>

      <Stack direction={{base: 'column', md: 'row'}} spacing={5} justifyContent="space-between">
        <Text fontSize="md" alignSelf={'center'}>
          Developed by{' '}
          <Link
            href="https://github.com/iabdulhannan"
            textDecoration="underline"
            _hover={{textDecoration: 'underline'}}
            isExternal
          >
            Abdul Hannan
          </Link>
        </Text>
        <Stack spacing={2} direction={{md: 'row'}} display={{base: 'none', md: 'flex'}}>
          <Button leftIcon={<FaFacebook/>} as={Link} href="https://www.facebook.com/groups/piaic/?mibextid=HsNCOg"
                  isExternal
                  rounded="md" bg={'#2a81f2'} color={'#ffffff'}>
            Facebook
          </Button>
          <Button leftIcon={<FaWhatsapp/>} as={Link} href="https://api.whatsapp.com/send?phone=923082220203" isExternal
                  rounded="md"
                  bg={'#25d366'} color={'#ffffff'}>
            WhatsApp
          </Button>
          <Button leftIcon={<FaYoutube/>} as={Link} href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"
                  isExternal rounded="md"
                  bg={'#cc0000'} color={'#ffffff'}>
            Youtube
          </Button>
        </Stack>

        <Box display={{base: "flex", md: 'none'}} mt={"10"} justifyContent={'center'}>
          <HStack spacing={4}>
            <IconButton size="md" icon={<FaFacebook/>} as={Link}
                        href="https://www.facebook.com/groups/piaic/?mibextid=HsNCOg"
                        isExternal aria-label="Open Facebook"
                        rounded="full" bg={'#2a81f2'} color={'#ffffff'}>
              Facebook
            </IconButton>

            <IconButton size="md" icon={<FaWhatsapp/>} as={Link} href="https://api.whatsapp.com/send?phone=923082220203"
                        isExternal
                        rounded="full" aria-label="Open Twitter"
                        bg={'#25d366'} color={'#ffffff'}>
              WhatsApp
            </IconButton>
            <IconButton size="md" icon={<FaYoutube/>} as={Link}
                        href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"
                        isExternal rounded="full" aria-label="Open YouTube"
                        bg={'#cc0000'} color={'#ffffff'}>
              Youtube
            </IconButton>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};
