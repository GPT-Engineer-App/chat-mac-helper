// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, Input, Button, VStack, useToast } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSend = () => {
    toast({
      title: "Message sent.",
      description: "Your message has been sent to the AI.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl" mb={2}>
            Chat with AI <FaRobot />
          </Heading>
          <Text mb={4}>Interact with a virtual AI similar to ChatGPT.</Text>
          <Input placeholder="Type your message here..." mb={4} />
          <Button rightIcon={<FaRobot />} colorScheme="blue" onClick={handleSend}>
            Send
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
