import { React } from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaUserAstronaut,
  FaHeart,
  FaCartArrowDown,
} from "react-icons/fa";

export default function NavbarCenter(props) {
  return (
    <Box bg="white" w="100%" h="98">
      <Center w="100%" h="100%">
        <Flex
          w="100%"
          maxW="bodyContent"
          h="100%"
          direction="row"
          align="center"
        >
          <Image src="/market_logo.svg" w="180px" px="10" alt="Market logo" />
          <Spacer />
          <Flex w="auto" h="100%" align="center">
            <InputGroup>
              <Input bg="gray.100" placeholder="Procure o seu produto" />
              <InputRightElement>
                <FaSearch />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex
            w="auto"
            h="100%"
            align="center"
            direction="row"
            paddingRight="35px"
            paddingLeft="20px"
          >
            <Box px="18px">
              <FaUserAstronaut size={20} />
            </Box>
            <Box px="18px">
              <FaHeart size={20} />
            </Box>
            <Box px="18px">
              <FaCartArrowDown size={20} />
            </Box>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}
