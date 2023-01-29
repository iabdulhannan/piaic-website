import {
  Stack,
  Box,
  Popover,
  Link,
  Text,
  Icon,
  HStack,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useColorModeValue, VStack
} from '@chakra-ui/react';
import {DropdownData} from 'piaicRoot/assets/types/types';
import {FaChevronDown} from 'react-icons/fa';


const DropDownMenu = (props: DropdownData) => {
  const {onOpen, onClose, isOpen} = useDisclosure();

  return (
    <Stack direction="row" spacing={4} display={{base: 'none', md: 'flex'}}>
      <Popover trigger="hover" placement="bottom-start" onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <HStack alignItems="center" cursor="pointer" role="group">
            <Link
              href="#"
              // p={2}
              fontWeight="semibold"
              _hover={{
                textDecorationLine: 'none',
                color: 'piaicGreen'
              }}
            >
              {props.title}
            </Link>
            <Icon
              as={FaChevronDown}
              h={4}
              w={4}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
              color={isOpen ? 'piaicGreen' : '#000000'}
            />
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          boxShadow={useColorModeValue(
            '2px 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          rounded="lg"
          minW="md"
          mt={5}
        >
          <Stack>
            {props?.items?.map((data: any, index: number) => (
              <DropDownItem key={index} {...data} />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

const DropDownItem = ({courseName, linkTo, subtitle}:{courseName:string, linkTo:string, subtitle:string}) => {
  return (
    <Link
      href={linkTo}
      display="block"
      p={2}
      rounded="md"
      _hover={{bg: 'gray.100',color: 'piaicGreen'}}
    >
      <Stack direction="row" align="center">
        <VStack spacing={2}>
          <Text noOfLines={2} textAlign={'left'}  fontWeight={500}>{courseName}</Text>
        </VStack>
      </Stack>
    </Link>
  );
};

export default DropDownMenu;
