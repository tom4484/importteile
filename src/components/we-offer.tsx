import { Flex, Heading, Image, List } from "@chakra-ui/react";
import diskBreakImg from "../assets/disc-break.png";
import oilImg from "../assets/oil.png";
import pistonImg from "../assets/piston.png";
import suspentionImg from "../assets/suspension.png";
import timingBeltImg from "../assets/timing-belt.png";

export const WeOffer = () => {
  const imageUrls = {
    suspension: suspentionImg,
    beltSystem: timingBeltImg,
    engineComponents: pistonImg,
    filtersFluids: oilImg,
    brakingSystem: diskBreakImg,
  };

  return (
    <Flex
      alignSelf="center"
      direction="column"
      gap="1em"
      id="we-offer"
      justify="center"
      maxW="800px"
      my="2em"
    >
      <Heading as="h2" size="5xl" mb="1em">
        We offer
      </Heading>
      <Flex
        gap="2.5em"
        wrap={{ base: "wrap", md: "unset" }}
        direction={{ base: "column", md: "row" }}
      >
        {/* Suspension */}
        <Flex
          direction="column"
          gap="1em"
          align={{ base: "center", md: "start" }}
        >
          <Image
            w="100px"
            src={imageUrls.suspension}
            alt="Suspension & Steering"
          />
          <Heading as="h3" size="lg">
            Suspension & Steering
          </Heading>
          <List.Root>
            <List.Item>Front/Rear Axle Bushings</List.Item>
            <List.Item>Ball Joints</List.Item>
            <List.Item>Tie Rod Ends</List.Item>
            <List.Item>Shock Absorbers (Front/Rear)</List.Item>
            <List.Item>Control Arms</List.Item>
          </List.Root>
        </Flex>
        {/* Belt System */}
        <Flex
          direction="column"
          gap="1em"
          align={{ base: "center", md: "start" }}
        >
          <Image
            w="100px"
            src={imageUrls.beltSystem}
            alt="Accessory Belt System"
          />
          <Heading as="h3" size="lg">
            Accessory Belt System
          </Heading>
          <List.Root>
            <List.Item>Rollers</List.Item>
            <List.Item>Pulleys</List.Item>
            <List.Item>Tensioners</List.Item>
            <List.Item>Dampers</List.Item>
          </List.Root>
        </Flex>
        {/* Engine Components */}
        <Flex
          direction="column"
          gap="1em"
          align={{ base: "center", md: "start" }}
        >
          <Image
            w="100px"
            src={imageUrls.engineComponents}
            alt="Engine Components"
          />
          <Heading as="h3" size="lg">
            Engine Components
          </Heading>
          <List.Root>
            <List.Item>Pistons</List.Item>
            <List.Item>Gasket Kits</List.Item>
            <List.Item>Engine Parts</List.Item>
            <List.Item>Valves</List.Item>
            <List.Item>Intake/Exhaust</List.Item>
            <List.Item>Timing System</List.Item>
            <List.Item>Seals</List.Item>
          </List.Root>
        </Flex>
        {/* Filters & Fluids */}
        <Flex
          direction="column"
          gap="1em"
          align={{ base: "center", md: "start" }}
        >
          <Image
            w="100px"
            src={imageUrls.filtersFluids}
            alt="Filters & Fluids"
          />
          <Heading as="h3" size="lg">
            Filters & Fluids
          </Heading>
          <List.Root>
            <List.Item>Engine Filters</List.Item>
            <List.Item>Transmission Filters</List.Item>
            <List.Item>Suspension Fluids</List.Item>
            <List.Item>Hydraulic Fluids</List.Item>
            <List.Item>Transmission Fluids (Automatic)</List.Item>
          </List.Root>
        </Flex>
        {/* Braking System */}
        <Flex
          direction="column"
          gap="1em"
          align={{ base: "center", md: "start" }}
        >
          <Image w="100px" src={imageUrls.brakingSystem} alt="Braking System" />
          <Heading as="h3" size="lg">
            Braking System
          </Heading>
          <List.Root>
            <List.Item>Brake Pads (Front/Rear)</List.Item>
            <List.Item>Brake Discs</List.Item>
            <List.Item>Wear Sensors</List.Item>
            <List.Item>Brake Pumps</List.Item>
            <List.Item>Caliper Repair</List.Item>
          </List.Root>
        </Flex>
      </Flex>
    </Flex>
  );
};
