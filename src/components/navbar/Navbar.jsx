import { React } from "react";
import NavbarTop from "./NavbarTop";
import NavbarCenter from "./NavbarCenter";
import NavbarBottom from "./NavbarBottom";

export default function Navbar(props) {
  return (
    <nav>
      <NavbarTop />
      <NavbarCenter />
      <NavbarBottom />
    </nav>
  );
}
