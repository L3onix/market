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
  Text,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaUserAstronaut,
  FaHeart,
  FaCartArrowDown,
} from "react-icons/fa";

export default function Navbar(props) {
  return (
    <nav>
      <Box bg="gray.200" w="100%" h="33">
        <Center w="100%" h="100%">
          <Flex
            w="100%"
            maxW="bodyContent"
            h="100%"
            direction="row"
            align="center"
            justify="end"
            px="5"
            py="2"
          >
            <Box h="100%" borderEnd="1px" borderColor="black" px="5">
              <Text fontSize="12">Recomende para amigos</Text>
            </Box>
            <Box h="100%" borderEnd="1px" borderColor="black" px="5">
              <Text fontSize="12">Devoluções gratuitas</Text>
            </Box>
            <Box h="100%" borderEnd="1px" borderColor="black" px="5">
              <Text fontSize="12">30 dias para devolução</Text>
            </Box>
            <Box h="100%" px="5">
              <Text fontSize="12">Contato e Ajuda</Text>
            </Box>
          </Flex>
        </Center>
      </Box>
      <Box bg="cyan" w="100%" h="98">
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
            <Box w="auto">
              <InputGroup>
                <Input bg="gray.100" placeholder="Procure o seu produto" />
                <InputRightElement>
                  <FaSearch />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Flex w="auto" direction="row">
              <FaUserAstronaut />
              <FaHeart />
              <FaCartArrowDown />
            </Flex>
          </Flex>
        </Center>
      </Box>
      <Box bg="orange" w="100%" h="45"></Box>
    </nav>
  );
}
