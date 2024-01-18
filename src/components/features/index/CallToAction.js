import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Modal from "../../assets/layout/Modal";





const CallToActionScheduler = ({ onTrackPeriodClick }) => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [callToAction, setCallToAction] = useState("");
  const [buttonText, setButtonText] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTrackPeriodClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (userName, userDob) => {
    onTrackPeriodClick(userName, userDob);
    setIsModalOpen(false);
  };



  const callToActions = [
    {
      id: "0",
      name: "Start your wellness journey! Track your menstrual cycle for a healthier you.",
      buttonText: "Get Started",
      icon: "🌿",
    },
    {
      id: "1",
      name: "Empower yourself with knowledge! Monitor your menstrual health effortlessly.",
      buttonText: "Begin Tracking",
      icon: "🍃",
    },
    {
      id: "2",
      name: "Blossom into self-care! Discover the benefits of tracking your menstrual cycle.",
      buttonText: "Explore Now",
      icon: "🌺",
    },
    {
      id: "3",
      name: "Nurture your body! Join thousands in understanding your menstrual rhythm.",
      buttonText: "Sign Up Today",
      icon: "🌱",
    },
    {
      id: "4",
      name: "Radiate positivity! Track your cycle to embrace a balanced lifestyle.",
      buttonText: "Start Now",
      icon: "🌸",
    },
    {
      id: "5",
      name: "Flourish in self-awareness! Monitor your menstrual health with ease.",
      buttonText: "Take Control",
      icon: "🌷",
    },
    {
      id: "6",
      name: "Cultivate well-being! Experience the difference by tracking your cycle.",
      buttonText: "Try It Out",
      icon: "🌿",
    },
    {
      id: "7",
      name: "Bloom with confidence! Take charge of your health through cycle tracking.",
      buttonText: "Begin Your Journey",
      icon: "🌺",
    },
    {
      id: "8",
      name: "Enhance your vitality! Start tracking today for a healthier tomorrow.",
      buttonText: "Start Tracking",
      icon: "🌸",
    },
    {
      id: "9",
      name: "Thrive in harmony! Discover the benefits of understanding your menstrual cycle.",
      buttonText: "Explore More",
      icon: "🌷",
    },
    {
      id: "10",
      name: "Nourish your body and mind! Track your menstrual cycle for holistic well-being.",
      buttonText: "Join Now",
      icon: "🌿",
    },
    {
      id: "11",
      name: "Transform your health! Begin the journey of self-discovery through cycle tracking.",
      buttonText: "Unlock Insights",
      icon: "🌺",
    },
    {
      id: "12",
      name: "Embrace your feminine power! Start tracking for a more connected you.",
      buttonText: "Get Started Today",
      icon: "🌸",
    },
    {
      id: "13",
      name: "Rejuvenate your lifestyle! Explore the wonders of menstrual cycle awareness.",
      buttonText: "Dive In",
      icon: "🌷",
    },
    {
      id: "14",
      name: "Flourish in vitality! Prioritize your health by tracking your menstrual cycle.",
      buttonText: "Start Wellness Journey",
      icon: "🌿",
    },
    {
      id: "15",
      name: "Radiate positivity! Track your cycle for a healthier and happier life.",
      buttonText: "Begin Tracking Now",
      icon: "🌸",
    },
    {
      id: "16",
      name: "Cultivate self-care! Empower yourself with the knowledge of your menstrual cycle.",
      buttonText: "Sign Up for Insights",
      icon: "🌷",
    },
    {
      id: "17",
      name: "Embrace your cycle! Discover the beauty of self-awareness through tracking.",
      buttonText: "Start Your Discovery",
      icon: "🍃",
    },
    {
      id: "18",
      name: "Elevate your well-being! Track your menstrual cycle for a balanced lifestyle.",
      buttonText: "Unlock Harmony",
      icon: "🌸",
    },
    {
      id: "19",
      name: "Transform your health journey! Experience the benefits of cycle tracking today.",
      buttonText: "Join the Movement",
      icon: "🌿",
    },
    {
      id: "20",
      name: "Celebrate your femininity! Prioritize your health by tracking your cycle.",
      buttonText: "Start Now",
      icon: "🌺",
    },
    {
      id: "21",
      name: "Cultivate balance! Begin your wellness journey with menstrual cycle tracking.",
      buttonText: "Begin Today",
      icon: "🌸",
    },
    {
      id: "22",
      name: "Empower your health! Explore the advantages of monitoring your menstrual cycle.",
      buttonText: "Discover Insights",
      icon: "🌿",
    },
    {
      id: "23",
      name: "Take control of your health through cycle tracking.",
      buttonText: "Start Empowering Yourself",
      icon: "🌷",
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
        {/* Empower your health! Explore the advantages of monitoring your menstrual cycle. */}
      </Heading>
      <Text color={"gray.500"} mb={6} mt={5}>
        Ignite a revolution in your well-being by embracing the wisdom of your
        menstrual cycle. Dive deep into the art of cycle awareness, where each
        phase unfolds a new opportunity for growth and self-care. Begin your
        transformative journey towards a balanced and empowered life.
      </Text>

      <Button colorScheme="teal" style={{ color: "#DA70D6" }} variant="outline" onClick={handleTrackPeriodClick}>
        {buttonText}
      </Button>


      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
      />
    </Box>
  );
};

export default CallToActionScheduler;
