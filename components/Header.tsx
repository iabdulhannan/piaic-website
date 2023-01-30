import React from 'react';
import {
  Link,
  Box,
  Flex,
  HStack,
  Container,
  Icon,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Accordion,
  AccordionButton,
  AccordionPanel, AccordionItem, AccordionIcon, Button, Heading
} from '@chakra-ui/react';
import DropDownMenu from './DropdownMenu';
import {FaGithub} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {dropdownData} from "piaicRoot/assets/data/data";
import PIAOCLogo from 'piaicRoot/assets/images/PIAICLogo.svg'
import PIAOCLogoSmall from 'piaicRoot/assets/images/PIAICLogoSmall.svg'
import {useRouter} from "next/router";

const GITHUB_REPO_LINK = 'https://github.com/iabdulhannan/piaic-website';


export default function Header() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box
        as="header"
        bg={'white'}
        px={4}
        boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
        position="fixed"
        width="100%"
        zIndex="55"
        top="0"
      >
        <Container maxW="calc(95vw)">
          <Flex h={"16"} alignItems="center" justifyContent="center">
            <Flex direction={'row'} alignItems="center" justifyContent={"space-between"} minW={'100%'} pos={'relative'}>
              {/*On Mobile*/}
              <IconButton
                size="md"
                icon={isOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
                aria-label="Open Menu"
                display={{base: 'inherit', md: 'none'}}
                onClick={isOpen ? onClose : onOpen}
                bg={'transparent'}
              />

              <Link onClick={() =>  router.push('/')} >
                <Box display={{base: 'none', md: 'block'}} cursor="pointer" position={'absolute'} top={0}>
                  <PIAOCLogo/>
                </Box>
                <Flex direction={'row'} display={{base: 'flex', md: 'none'}} cursor="pointer" justifyContent={'center'}
                      alignItems={'center'}>
                  <PIAOCLogoSmall/>
                  <Heading ml={5} fontWeight={'normal'}>
                    PIAIC
                  </Heading>
                </Flex>

              </Link>

              <HStack display={{base: 'none', md: 'flex'}}>
                {
                  dropdownData.map((data, index) => {
                    if (data.isDropdown) {

                      return (
                        <DropDownMenu key={index} {...data}/>
                      )
                    } else {
                      return (
                        <Button
                          as={Link}
                          key={index} href={data.linkTo}
                          variant={'outline'}
                          rounded={'lg'}
                          borderWidth={0}
                          _hover={{
                            textDecorationLine: 'none',
                            color: 'piaicGreen'
                          }}
                        >
                          {data.title}
                        </Button>
                      )
                    }

                  })
                }
              </HStack>

              <Link href={GITHUB_REPO_LINK} isExternal>
                <Flex
                  as="button"
                  p="0.6rem"
                  cursor="pointer"
                  _hover={{bg: useColorModeValue('gray.300', 'gray.600')}}
                  justify="center"
                >
                  <Icon as={FaGithub} color={'#000000'} fontSize={{base: 'xl', md: '3xl'}}/>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Container>

        {isOpen ? (
            <Box pb={4} display={{base: 'inherit', md: 'none'}}>
              <Accordion allowToggle>
                {
                  dropdownData.map((data, index) => {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton>
                          {
                            data.isDropdown ? (
                                <Text as="h6" fontWeight={'600'} flex={1} textAlign='left'>
                                  {data.title}
                                </Text>

                              ) :
                              (
                                <Text as={Link} href={data.linkTo} onClick={() => onClose()} fontWeight={'600'} flex={1}
                                      textAlign='left'>
                                  {data.title}
                                </Text>

                              )
                          }
                          {
                            data.isDropdown && <AccordionIcon/>
                          }
                        </AccordionButton>

                        {
                          data.isDropdown && (

                            <AccordionPanel>
                              {
                                data?.items?.length && data?.items?.map((item, index) => {
                                  return (
                                    <>
                                      <Flex alignItems={"center"} key={index} px={2} py={3} rounded={'md'}
                                            borderBottomWidth={index === data?.items?.length! - 1 ? 0 : 1}>
                                        <Link
                                          href={item.linkTo}
                                          onClick={() => onClose()}
                                          _focus={{
                                            textDecorationLine: 'none',
                                            color: 'piaicGreen'
                                          }}
                                        >
                                          <Text noOfLines={2}>
                                            {item.courseName}
                                          </Text>
                                        </Link>
                                      </Flex>
                                    </>
                                  )
                                })
                              }
                            </AccordionPanel>
                          )
                        }
                      </AccordionItem>
                    )
                  })
                }
              </Accordion>
            </Box>
          )
          :
          null
        }
      </Box>
    </>
  )
    ;
}
