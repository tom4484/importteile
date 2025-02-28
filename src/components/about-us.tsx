import { Flex, Heading, Text } from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <Flex
      alignSelf="center"
      direction="column"
      gap="1em"
      id="about-us"
      maxW="800px"
      m="4em 0 2em"
      p={{ base: "0 1em", md: "0" }}
    >
      <Heading as="h2" size="5xl" mb="1em">
        About us
      </Heading>
      <Flex direction="column" gap="1em">
        <Heading as="h3" size="lg">
          Teileimport: 20 Years of Experience in Mercedes-Benz, BMW and AUDI Maintenance
        </Heading>
        <Text>
          At Teileimport, we have over 20 years of experience servicing 
          classic  Mercedes-Benz , BMW and AUDI vehicles.
          Located in Miami , FL, we offer a vast stock of parts to meet all your
          needs, including filters, suspension components, front and rear axle
          parts, automatic transmissions, and both exterior and interior
          bodywork. Our products ensure your vehicle maintains its originality
          and optimal performance.
        </Text>
      </Flex>
      <Flex direction="column" gap="1em">
        <Heading as="h3" size="lg">
          Who We Serve
        </Heading>
        <Text>
          We provide solutions for dealerships, specialized workshops,
          collectors, and individual customers. Additionally, we offer a custom
          import service for classic car parts or rare components not available
          in the market.
        </Text>
      </Flex>
      <Flex direction="column" gap="1em">
        <Heading as="h3" size="lg">
          Shipping & Quality Assurance
        </Heading>
        <Text>
          We ship nationwide and to neighboring countries, working exclusively
          with OEM manufacturers from Europe to guarantee the highest quality
          standards. Contact us today to find the perfect parts for your
          vehicle! 🚗✨
        </Text>
      </Flex>
    </Flex>
  );
};
