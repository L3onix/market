import { React } from "react";
import {
  Box,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
} from "@chakra-ui/react";

export default function NavbarBottom(props) {
  return (
    <Box bg="orange" w="100%" h="45">
      <Center w="100%" h="100%">
        <Flex
          w="100%"
          maxW="bodyContent"
          h="100%"
          direction="row"
          align="center"
          justify="center"
        >
          <Link href="#">Novidades</Link>
          <Menu>
            <MenuButton>Móveis</MenuButton>
            <Portal>
            <MenuList>
                <MenuItem as='a' href='#'>Salas de Estar</MenuItem>
            </MenuList>
            </Portal>
          </Menu>
        </Flex>
      </Center>
    </Box>
  );
}
