import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const CallToActionScheduler = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [callToAction, setCallToAction] = useState("");
  const [buttonText, setButtonText] = useState("");

  const callToActions = [
    { name: "Start Your Wellness Journey!", buttonText: "Begin Now" },
    { name: "Embrace the Power of Self-Care!", buttonText: "Discover More" },
    { name: "Cultivate Harmony Within!", buttonText: "Start Cultivating" },
    
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      const newHour = new Date().getHours();
      console.log("New Hour:", newHour);
      setCurrentHour(newHour);
      const currentCallToAction = callToActions[newHour % callToActions.length];
      console.log("Current Call To Action:", currentCallToAction);
      setCallToAction(currentCallToAction.name);
      setButtonText(currentCallToAction.buttonText);
    }, 100);
  }, []);

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
        color={"#DA70D6"}
      >
        {callToAction}
      </Heading>
      <Text color={"gray.500"} mb={6}>
        Ignite a revolution in your well-being by embracing the wisdom of your
        menstrual cycle. Dive deep into the art of cycle awareness, where each
        phase unfolds a new opportunity for growth and self-care. Begin your
        transformative journey towards a balanced and empowered life.
      </Text>

      <Button colorScheme="teal" style={{ color: "#DA70D6" }} variant="outline">
        {buttonText}
      </Button>
    </Box>
  );
};

export default CallToActionScheduler;
