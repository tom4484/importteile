import { Flex } from "@chakra-ui/react";
import { FloatingWhatsAppButton } from "./components/whatsapp-button";

import { AboutUs } from "./components/about-us";
import { Contacto } from "./components/contacto";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { WeOffer } from "./components/we-offer";
import { Footer } from "./components/footer";

export function App() {
  return (
    <Flex
      direction="column"
      justify="center"
      w="full"
      position="relative"
      className="container"
      >
      {/* Header */}
      <Header />
      <Flex as="main" direction="column" mt="72px" position="relative" bgColor="white">
        {/* Hero */}
        <Hero />
        {/* About us */}
        <AboutUs />
        {/* We offer */}
        <WeOffer />
        {/* Contacto */}
        <Contacto />
        {/* Footer */}
        <Footer />
        {/* Boton flotante Whatsapp */}
        <FloatingWhatsAppButton />
      </Flex>
    </Flex>
  );
}
