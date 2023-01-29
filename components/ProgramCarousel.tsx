import React, {useState} from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container, Flex, Button,
} from '@chakra-ui/react';
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import Slider from 'react-slick';
import {programCarouselData} from "piaicRoot/assets/data/data";
import Link from "next/link";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProgramCarousel() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const top = useBreakpointValue({base: '90%', md: '50%'});
  const side = useBreakpointValue({base: '30%', md: '40px'});


  return (
    <Container
      minW={'calc(100vw)'} h={'calc(100vh)'}
      position={'relative'}
      overflow={'hidden'}
      p={0}
      // ml={-10}
      // mr={-20}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px"/>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px"/>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {programCarouselData.map((data, index) => (
          <Box
            key={index}
            h={'calc(100vh)'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${data.imageURL})`}>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} height="full"
                  position="relative">
              <Box bg={'linear-gradient(180deg, hsla(210, 38%, 95%, 0.5) 29%, hsla(0, 0%, 96%, 1) 100%)'}
                // borderWidth={1}
                   w={'full'}
                   maxW={'2xl'}
                   zIndex={'20'}
                   borderRadius={'xl'}
                   p={5}
              >
                <Heading fontSize={{base: '3xl', md: '4xl', lg: '5xl'}} my={2}>
                  {data.title}
                </Heading>
                <Text fontSize={{base: 'md', lg: 'lg'}} my={2} textTransform={'uppercase'} color="gray.800">
                  {data.description}
                </Text>
                <Button
                  as={Link}
                  href={data.linkTo}
                  cursor={'pointer'}
                  variant={'outline'}
                  minW={'150'}
                  rounded={'lg'}
                  color={'piaicGreen'}
                  borderColor={'piaicGreen'}
                  // _hover={{
                  //   borderColor: '#ffffff',
                  //   bg: 'piaicGreen',
                  // }}
                  px={6}>
                  Explore
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}
