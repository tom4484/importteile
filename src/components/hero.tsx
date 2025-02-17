import { Flex, Heading } from "@chakra-ui/react";

import { ImageSlider } from "./image-slider";

export const Hero = () => {
  return (
    <Flex
      align="center"
      direction="column"
      id="hero"
      justify="center"
      position="relative"
    >
      <Heading
        as="h1"
        size="7xl"
        top={{ base: "30%", md: "40%" }}
        position="absolute"
        zIndex="20"
        color="white"
      >
        Import Teile
      </Heading>
      <ImageSlider />
    </Flex>
  );
};
