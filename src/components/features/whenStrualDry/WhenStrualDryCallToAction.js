import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const WhenStrualDryCallToAction = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [callToAction, setCallToAction] = useState("");
  const [buttonText, setButtonText] = useState("");

  const callToActions = [
    {
      id: "0",
      name: "Empower Girls' Education! Provide sanitary pads for uninterrupted schooling.",
      buttonText: "Donate Now",
      icon: "🌸",
    },
    {
      id: "1",
      name: "Blossom of Dignity! Contribute to the sanitary pad program for schoolgirls.",
      buttonText: "Support Today",
      icon: "🌿",
    },
    {
      id: "2",
      name: "Nurture Potential! Help girls focus on education by ensuring menstrual hygiene.",
      buttonText: "Give Now",
      icon: "🌷",
    },
    {
      id: "3",
      name: "Flourish in Education! Support the sanitary pad program and uplift young minds.",
      buttonText: "Join the Cause",
      icon: "🍃",
    },
    {
      id: "4",
      name: "Blooming Futures! Donate for sanitary pads to empower schoolgirls in their studies.",
      buttonText: "Make a Difference",
      icon: "🌺",
    },
    {
      id: "5",
      name: "Cultivate Confidence! Enable girls to attend school confidently with your donation.",
      buttonText: "Empower Today",
      icon: "🌱",
    },
    {
      id: "6",
      name: "Harmony in Education! Support the pad program for a balanced learning environment.",
      buttonText: "Give the Gift of Education",
      icon: "🌸",
    },
    {
      id: "7",
      name: "Radiate Empathy! Contribute to the cause of menstrual hygiene for schoolgirls.",
      buttonText: "Donate and Transform Lives",
      icon: "🌿",
    },
    {
      id: "8",
      name: "Sow Seeds of Change! Help schoolgirls access essential menstrual hygiene supplies.",
      buttonText: "Seed the Future",
      icon: "🌷",
    },
    {
      id: "9",
      name: "Thrive in Education! Support the sanitary pad program for a brighter tomorrow.",
      buttonText: "Support Girls' Dreams",
      icon: "🍃",
    },
    {
      id: "10",
      name: "Blooming Brilliance! Empower girls with the tools for a successful education.",
      buttonText: "Give the Gift of Learning",
      icon: "🌺",
    },
    {
      id: "11",
      name: "Cultivate Equality! Ensure every girl has access to menstrual hygiene resources.",
      buttonText: "Donate for Equality",
      icon: "🌱",
    },
    {
      id: "12",
      name: "Radiate Support! Join the mission to provide sanitary pads for schoolgirls.",
      buttonText: "Support the Cause",
      icon: "🌸",
    },
    {
      id: "13",
      name: "Harmony in Hygiene! Contribute to the sanitary pad program for a healthy learning environment.",
      buttonText: "Give Hygiene, Give Hope",
      icon: "🌿",
    },
    {
      id: "14",
      name: "Blossom of Knowledge! Help girls embrace education without menstrual barriers.",
      buttonText: "Educate with Empathy",
      icon: "🌷",
    },
    {
      id: "15",
      name: "Empower Brighter Tomorrows! Support the sanitary pad program for a brighter future.",
      buttonText: "Donate for Tomorrow",
      icon: "🍃",
    },
    {
      id: "16",
      name: "Cultivate Dreams! Give girls the tools they need to dream and succeed.",
      buttonText: "Support Dreams",
      icon: "🌺",
    },
    {
      id: "17",
      name: "Radiate Equality! Contribute to a world where every girl has access to menstrual hygiene.",
      buttonText: "Support Equality",
      icon: "🌱",
    },
    {
      id: "18",
      name: "Sow the Seeds of Change! Empower girls with the gift of menstrual hygiene.",
      buttonText: "Donate for Change",
      icon: "🌸",
    },
    {
      id: "19",
      name: "Blooming Education! Support the sanitary pad program to foster a love for learning.",
      buttonText: "Bloom with Education",
      icon: "🌿",
    },
    {
      id: "20",
      name: "Nurture Bright Minds! Contribute to the well-being of schoolgirls through menstrual hygiene.",
      buttonText: "Support Bright Minds",
      icon: "🌷",
    },
    {
      id: "21",
      name: "Flourish in Compassion! Join hands to provide essential menstrual supplies for schoolgirls.",
      buttonText: "Give with Compassion",
      icon: "🍃",
    },
    {
      id: "22",
      name: "Blossom of Hope! Support the sanitary pad program and be a beacon of hope for girls.",
      buttonText: "Donate for Hope",
      icon: "🌺",
    },
    {
      id: "23",
      name: "Cultivate a Future! Contribute to the sanitary pad program and nurture young aspirations.",
      buttonText: "Cultivate the Future",
      icon: "🌱",
    },
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
      <Text color={"gray.500"} mb={6} mt={5}>
        🌸 **Brief Summary:** Empower girls' education with your support! Your
        donation provides essential sanitary pads, breaking down barriers to
        learning. Cultivate change, sow seeds of equality, and radiate
        compassion. Join us in nurturing dreams and fostering a brighter,
        barrier-free future. Donate now and be a vital part of cultivating
        empowerment and opportunity. 🌿✨
      </Text>

      <Button colorScheme="teal" style={{ color: "#DA70D6" }} variant="outline">
        {buttonText}
      </Button>
    </Box>
  );
};

export default WhenStrualDryCallToAction;
