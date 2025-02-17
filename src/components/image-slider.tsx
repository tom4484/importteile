import { useState, useEffect } from "react";
import { Box, Image, IconButton, Flex } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import mercedes00 from "../assets/mercedes-00.jpg";
import mercedes01 from "../assets/mercedes-01.jpg";
import mercedes02 from "../assets/mercedes-02.jpg";
import mercedes03 from "../assets/mercedes-03.jpg";
import mercedes04 from "../assets/mercedes-04.jpg";
import mercedes05 from "../assets/mercedes-05.jpg";

const images = [
  mercedes00,
  mercedes01,
  mercedes02,
  mercedes03,
  mercedes04,
  mercedes05,
];

const LESS_THAN_MAX_ZINDEX = 1;

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      className="slider"
      maxH="600px" // Aca le podes cambiar el alto al slider
      overflow="hidden"
      position="relative"
      width="full" // Aca el ancho
    >
      <Flex
        opacity="0.6"
        bg="black"
        bottom="0"
        h="full"
        position="absolute"
        top="0"
        w="full"
        zIndex={LESS_THAN_MAX_ZINDEX}
      />
      <Box
        display="flex"
        transition="transform 0.6s ease"
        transform={`translateX(-${currentIndex * 100}%)`}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        ))}
      </Box>
      <IconButton
        display={{ base: "none", md: "block" }}
        left="10px"
        onClick={prevSlide}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        variant="ghost"
        zIndex={1}
      >
        <FaChevronLeft />
      </IconButton>
      <IconButton
        display={{ base: "none", md: "block" }}
        onClick={nextSlide}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        variant="ghost"
        zIndex={1}
      >
        <FaChevronRight />
      </IconButton>
    </Box>
  );
};
