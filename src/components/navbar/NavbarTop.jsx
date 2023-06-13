import { React } from "react";
import {
    Box,
    Center,
    Flex,
    Text
} from '@chakra-ui/react';

export default function NavbarTop(props) {
  return (
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
  );
}
