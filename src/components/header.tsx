import { Avatar, Flex, Text, Link, IconButton } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import logo from "../assets/logo.svg";

import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

const MAX_ZINDEX = 100;

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Flex
      align="center"
      as="header"
      bgColor="gray.700"
      id="header"
      justify="space-between"
      color="white"
      p="1em"
      position="fixed"
      top="0"
      w="100%"
      zIndex={MAX_ZINDEX}
    >
      {/* Logo */}
      <Flex align="center" gap="1em">
        <Avatar.Root>
          <Avatar.Fallback name="Import Teile" />
          <Avatar.Image src={logo} bg="white" />
        </Avatar.Root>
        {/* <Avatar name="Import Teile" size="sm" mr={2} /> */}
        <Text fontSize="lg" fontWeight="bold">
          Import Teile
        </Text>
      </Flex>

      {/* Menu Toggle for Mobile */}
      <MenuRoot>
        <MenuTrigger asChild>
          <IconButton
            aria-label="Toggle navigation"
            // display={{ base: "block", md: "none" }} // deshabilitado momentaneamente
            display="none"
            onClick={() => setShowNav(!showNav)}
            bg="transparent"
            _hover={{ bg: "gray.600" }}
          >
            {showNav ? <FaTimes /> : <FaBars />}
          </IconButton>
        </MenuTrigger>
        <MenuContent>
          <MenuItem asChild value="naruto">
            <a href="#about-us">About Us</a>
          </MenuItem>
          <MenuItem asChild value="one-piece">
            <a href="#mercado-shops">Mercado Shops</a>
          </MenuItem>
        </MenuContent>
      </MenuRoot>

      {/* Navigation Links */}
      <Flex
        direction={{ base: "column", md: "row" }}
        // display={{ base: showNav ? "flex" : "none", md: "flex" }}  // deshabilitado momentaneamente
        display="none"
        align={{ base: "flex-start", md: "center" }}
        gap={{ base: "1em", md: "2em" }}
      >
        <Link href="#about-us" _hover={{ color: "teal.300" }}>
          About Us
        </Link>
        <Link href="#mercado-shops" _hover={{ color: "teal.300" }}>
          Mercado Shops
        </Link>
      </Flex>
    </Flex>
  );
};
