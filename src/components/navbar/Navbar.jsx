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
import NavbarTop from "./NavbarTop";
import NavbarCenter from "./NavbarCenter";

export default function Navbar(props) {
  return (
    <nav>
      <NavbarTop />
      <NavbarCenter />
      <Box bg="orange" w="100%" h="45"></Box>
    </nav>
  );
}
