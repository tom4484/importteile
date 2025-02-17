import {
  Box,
  Flex,
  Heading,
 // IconButton,
  Link,
  Separator,
  Text,
} from "@chakra-ui/react";
// import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";

export const Contacto = () => {
  //const Redes = {
    // Aca poner los usuarios de las redes
  //  Instagram: { url: "https://www.instagram.com/", enabled: true },
  //  Facebook: { url: "https://www.facebook.com/", enabled: true },
  //  Twitter: { url: "https://twitter.com/", enabled: true },
  //  Youtube: { url: "https://www.youtube.com/", enabled: true },
  //};

  return (
    <Flex direction="column" id="contacto" my="2em">
      <Separator />
      <Flex
        alignSelf="center"
        align={{ base: "center", md: "flex-start" }}
        direction={{ base: "column", md: "row" }}
        gap="4em"
        maxW="800px"
        my="4em"
        p={{ base: "1em", md: "0" }}
      >
        {/* Social */}
        <Flex gap="1em" direction="column">
          <Heading>Social</Heading>
          {/* <Flex>
            {Redes.Instagram.enabled && (
              <IconButton
                _hover={{ color: "violet" }}
                onClick={() => window.open(Redes.Instagram.url)}
                title="Instagram"
                variant="ghost"
              >
                <SiInstagram />
              </IconButton>
            )}
            {Redes.Facebook.enabled && (
              <IconButton
                _hover={{ color: "blue" }}
                onClick={() => window.open(Redes.Facebook.url)}
                title="Facebook"
                variant="ghost"
              >
                <SiFacebook />
              </IconButton>
            )}
            {Redes.Twitter.enabled && (
              <IconButton
                _hover={{ color: "cyan" }}
                onClick={() => window.open(Redes.Twitter.url)}
                title="Twitter"
                variant="ghost"
              >
                <SiX />
              </IconButton>
            )}
            {Redes.Youtube.enabled && (
              <IconButton
                _hover={{ color: "red" }}
                onClick={() => window.open(Redes.Youtube.url)}
                title="Youtube"
                variant="ghost"
              >
                <SiYoutube />
              </IconButton>
            )}
          </Flex> */}
        </Flex>
        {/* Contact Us */}
        <Flex direction="column" gap="1em">
          <Heading>Contact us</Heading>
          <Text>
            <Box as="span" fontWeight="bold">
              Address:
            </Box>{" "}
            <Link href="https://www.google.com/maps/search/?api=1&query=14728+sw+55+terrace,+Miami,+Florida,+USA">
              14728 SW 55 Terrace, Miami, Florida, USA
            </Link>
          </Text>
          <Text>
            <Box as="span" fontWeight="bold">
              Phone:
            </Box>{" "}
            <Link href="tel:+393932467740">+393932467740</Link>
          </Text>
          <Text>
            <Box as="span" fontWeight="bold">
              Email:
            </Box>{" "}
            <Link href="mailto:importteile@gmail.com">
              importteile@gmail.com
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
