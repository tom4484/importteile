import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex as="footer" my="2em" justify="center" w="full" px="1em">
      <Text
        fontSize={{ base: "sm", md: "md" }}
      >{`© ${new Date().getFullYear()} Import Teile. Todos los derechos reservados.`}</Text>
    </Flex>
  );
};
