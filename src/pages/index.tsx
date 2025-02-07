import Head from "next/head";
import { Avatar, Flex, Heading, List, Text } from "@chakra-ui/react";
import { FloatingWhatsAppButton } from "../components/whatsapp-button";
import Image from "next/image";
import principalIMG from "../../public/principal.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Import Teile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" justify="center">
        {/* Header */}
        <Flex
          w="full"
          p="1em"
          bgColor="gray.500"
          justify="space-between"
          align="center"
        >
          <Avatar.Root>
            <Avatar.Fallback name="Import Teile" />
          </Avatar.Root>
          <Flex>Nav</Flex>
        </Flex>
        <Flex
          direction="column"
          position="relative"
          justify="center"
          align="center"
        >
          <Heading size="7xl" position="absolute" zIndex="20">
            Import Teile
          </Heading>
          <Flex
            w="full"
            h="full"
            bg="black"
            position="absolute"
            top="0"
            bottom="0"
            opacity="0.6"
            zIndex="10"
          />
          <Image src={principalIMG} alt="Picture of the author" />
        </Flex>
        {/* About us */}
        <Flex
          justify="center"
          flex="1"
          maxW="800px"
          gap="1em"
          direction="column"
        >
          <Heading>About us</Heading>
          <Flex direction="column">
            <Heading size="lg">
              Teileimport: 30 Years of Experience in Mercedes-Benz & BMW Auto
              Parts
            </Heading>
            <Text>
              At Teileimport, we have over 30 years of experience importing and
              selling high-quality spare parts for Mercedes-Benz and BMW
              vehicles. Located at Av. Jorge Newbery 3985, we offer a vast stock
              of parts to meet all your needs, including filters, suspension
              components, front and rear axle parts, automatic transmissions,
              and both exterior and interior bodywork. Our products ensure your
              vehicle maintains its originality and optimal performance.
            </Text>
          </Flex>
          <Flex direction="column">
            <Heading size="lg">Who We Serve</Heading>
            <Text>
              We provide solutions for dealerships, specialized workshops,
              collectors, and individual customers. Additionally, we offer a
              custom import service for classic car parts or rare components not
              available in the market.
            </Text>
          </Flex>
          <Flex direction="column">
            <Heading size="lg">Shipping & Quality Assurance</Heading>
            <Text>
              We ship nationwide and to neighboring countries, working
              exclusively with OEM manufacturers from Europe to guarantee the
              highest quality standards. Contact us today to find the perfect
              parts for your vehicle! 🚗✨
            </Text>
          </Flex>
        </Flex>
        {/* We offer */}
        <Flex direction="column" justify="center" maxW="800px" gap="1em">
          <Heading>We offer</Heading>
          <Flex>
            <Flex direction="column">
              <Heading size="lg">Suspension & Steering</Heading>
              <List.Root>
                <List.Item>Front/Rear Axle Bushings</List.Item>
                <List.Item>Ball Joints</List.Item>
                <List.Item>Tie Rod Ends</List.Item>
                <List.Item>Shock Absorbers (Front/Rear)</List.Item>
                <List.Item>Control Arms</List.Item>
              </List.Root>
            </Flex>
            <Flex direction="column">
              <Heading size="lg">Accessory Belt System</Heading>
              <List.Root>
                <List.Item>Rollers</List.Item>
                <List.Item>Pulleys</List.Item>
                <List.Item>Tensioners</List.Item>
                <List.Item>Dampers</List.Item>
              </List.Root>
            </Flex>
            <Flex direction="column">
              <Heading size="lg">Engine Components</Heading>
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
            <Flex direction="column">
              <Heading size="lg">Filters & Fluids</Heading>
              <List.Root>
                <List.Item>Engine Filters</List.Item>
                <List.Item>Transmission Filters</List.Item>
                <List.Item>Suspension Fluids</List.Item>
                <List.Item>Hydraulic Fluids</List.Item>
                <List.Item>Transmission Fluids (Automatic)</List.Item>
              </List.Root>
            </Flex>
            <Flex direction="column">
              <Heading size="lg">Braking System</Heading>
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
        {/* Contacto */}
        <Flex direction="column" justify="center" maxW="800px" gap="1em">
          <Heading>Contact us</Heading>
          <Text>Address: Av. Jorge Newbery 3985, Buenos Aires, Argentina</Text>
          <Text>Phone: +54 11 4567-8901</Text>
          <Text>Email: tomasrios@gmail.com</Text>
        </Flex>
        <FloatingWhatsAppButton />
      </Flex>
    </>
  );
}
