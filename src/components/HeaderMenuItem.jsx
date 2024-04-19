import { Icon, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Supports weights 100-900
import "@fontsource-variable/montserrat";
import "@fontsource/audiowide";

const HeaderMenuItem = ({ url, label, icon }) => {
  let bColor = "teal.500";
  let Color = "gray.800";
  let FontWeight = "450";
  let FontFamily = "Montserrat Variable, sans-serif";

  // Change the background color if the label is 'Contact'
  if (label.toLowerCase() === "contact") {
    bColor = "#63B3ED";
    Color = "whiteAlpha.800";
    FontWeight = "bold";
    FontFamily = "Audiowide, sans-serif";
  }
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="sm"
      letterSpacing="wide"
      textTransform="uppercase"
      mb={{ base: "2", md: "0" }}
      mr="4"
      display="flex"
      alignItems="center"
      color={Color}
      _hover={{
        textDecor: "none",
        color: "whiteAlpha.800",
        transform: "scale(1.1)",
      }}
      bgColor={bColor}
      fontWeight={FontWeight}
      fontFamily={FontFamily}
      px="3"
      py="2"
      borderRadius="full"
      transition="tranform 0.3 ease"
      boxShadow="md"
    >
      <Icon bgColor={bColor} as={icon} mr="1" w="4" h="4" />
      {label}
    </Link>
  );
};

export default HeaderMenuItem;
