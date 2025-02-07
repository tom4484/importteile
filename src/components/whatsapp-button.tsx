import { Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsAppButton() {
  const whatsappNumber = "+393932467740"; // Replace with your actual WhatsApp number
  const message = "Hello! I'm interested in your services."; // Default message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Icon
      _hover={{ bg: "green.600" }}
      aria-label="Call us!"
      bg="green.500"
      bottom="20px"
      color="white"
      fontSize="4em"
      onClick={() => window.open(whatsappLink, "_blank")}
      position="fixed"
      right="20px"
      rounded="xl"
      zIndex="1000"
    >
      <FaWhatsapp fontSize="6em" />
    </Icon>
  );
}
