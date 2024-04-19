import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import { HiMenuAlt3, HiShoppingBag, HiUser, HiPhone } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";

import HeaderMenuItem from "./HeaderMenuItem";

import "@fontsource-variable/montserrat";
import "@fontsource/syncopate";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      textAlign="center"
      as="header"
      align="center"
      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.800"
      w="180vh"
      mt="4"
      borderRadius="full"
      ml="auto"
      mr="auto"
      z="999"
      boxShadow="lg"
    >
      {/* Logo/Title */}
      <Link
        as={RouterLink}
        to="/"
        textDecor="none"
        _hover={{
          transform: "rotateY(360deg)", // Apply rotation on hover
          textDecorationColor: "transparent",
        }}
        transition="transform 0.6s ease"
        boxShadow="md"
      >
        <Heading
          as="h1"
          color="whiteAlpha.900"
          fontWeight="bold"
          size="md"
          letterSpacing="wide"
          bgColor="#63B3ED"
          px="3"
          py="2"
          borderRadius="full"
          fontFamily="Syncopate, sans-serif"
        >
          Portfolyo
        </Heading>
      </Link>

      {/* Hamburger Menu */}
      <Box onClick={() => setShow(!show)} bgColor="gray.800">
        <Icon
          display={{ base: "block", md: "none" }}
          as={HiMenuAlt3}
          color="white"
          w="6"
          h="6"
        />
      </Box>

      {/* Menu */}
      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: "4", md: "0" }}
        bgColor="gray.800"
      >
        <HeaderMenuItem url="/about" label="About" icon={HiShoppingBag} />
        <HeaderMenuItem url="/skill" label="skill" icon={HiUser} />
        <HeaderMenuItem url="/projects" label="Projects" icon={HiUser} />
        <HeaderMenuItem url="/services" label="services" icon={HiUser} />
        <HeaderMenuItem url="/testimonial" label="testimonial" icon={HiUser} />
        <HeaderMenuItem url="/contact" label="contact" icon={HiPhone} />
      </Box>
    </Flex>
  );
};

export default Header;
