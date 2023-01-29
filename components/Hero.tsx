import {
  Heading,
  Container,
  Text,
  Button,
  Stack, Center, Flex, HStack,
} from '@chakra-ui/react';
import Link from "next/link";

export default function Hero() {
  return (

    <Container position={'relative'} minW={'calc(100vw)'} h={'calc(100vh)'} justifyContent={'center'}
               alignItems={"center"} mt={-16}
               bg={'radial-gradient(circle, hsla(177, 98%, 20%, 1) 0%, hsla(184, 79%, 13%, 1) 100%)'}>
      <Center h={'full'}>

        <Stack
          as={Flex}
          textAlign={'center'}
          spacing={{base: 8, md: 14}}
          py={{base: 20, md: 36}}
          direction={'column'}
          justifyContent={'center'}
          alignItems={"center"}
        >
          <Heading
            as={'h1'}
            fontSize={{base: '4xl', sm: '5xl'}}
            fontWeight="semibold"
            textAlign="center"
            maxW="600px"
            color={'#ffffff'}
          >
            Presidential Initiative <br/>
            <Text as={'span'} fontWeight={'normal'} color={'#ffffff'} fontSize={{base: '2xl', sm: '3xl'}}
                  bg="linear-gradient(transparent 70%, #9ca3af 100%)">
              for Artificial Intelligence & Computing
            </Text>
          </Heading>
          <Text color={'gray.300'} maxW={'5xl'} textAlign={{base: 'justify', md: 'center'}} fontWeight={'thin'}>
            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting
            latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan
            to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented
            reality, and internet of things.
          </Text>

          <HStack
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link href={'https://portal.piaic.org/signup'}>
              <Button
                minW={'150'}
                rounded={'lg'}
                px={6}
                _hover={{
                  borderWidth: 1,
                  borderColor: '#000000',
                }}
              >
                Apply
              </Button>
            </Link>
            <Link href={'howItWorks'}>
              <Button
                variant={'outline'}
                minW={'150'}
                rounded={'lg'}
                color={'#ffffff'}
                _hover={{
                  borderWidth: 2,
                }}
                px={6}>
                How It Works
              </Button>
            </Link>

          </HStack>
        </Stack>
      </Center>
    </Container>
  );
}

