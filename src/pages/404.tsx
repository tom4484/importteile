import { Box, Heading, Text } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={2}>
        404
      </Heading>
      <Text fontSize="xl">
        Oops! The page you’re looking for doesn’t exist.
      </Text>
    </Box>
  );
}
