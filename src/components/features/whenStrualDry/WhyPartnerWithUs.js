// import React, { useState } from 'react';

// const PartnerWithUsPage = () => {
//   const [donationAmount, setDonationAmount] = useState(0);

//   const handleDonationChange = (event) => {
//     setDonationAmount(event.target.value);
//   };

//   const handleDonateClick = () => {
//     // Implement donation processing logic here
//     // You may want to use a payment gateway or other donation handling mechanisms
//     // For simplicity, let's just log the donation amount for now
//     console.log(`Thank you for donating $${donationAmount} to WhenStrualDry Diaper Donation Initiative!`);
//   };

//   return (
//     <div>
//       <h2>Support WhenStrualDry Diaper Donation Initiative</h2>
//       <p>Your contribution will empower secondary school girls with comfortable and eco-friendly menstrual hygiene products.</p>
//       <label htmlFor="donationAmount">Enter Donation Amount:</label>
//       <input
//         type="number"
//         id="donationAmount"
//         value={donationAmount}
//         onChange={handleDonationChange}
//       />
//       <button onClick={handleDonateClick}>Donate Now</button>
//     </div>
//   );
// };

// export default PartnerWithUsPage;

import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { GrGrow } from "react-icons/gr";
import { FaBaby } from "react-icons/fa";
import { RxLinkBreak2 } from "react-icons/rx";
import { TbMassage } from "react-icons/tb";
import { GoSun } from "react-icons/go";
import { GiBreakingChain } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaPeoplePulling } from "react-icons/fa6";
import { SlEqualizer } from "react-icons/sl";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineDifference } from "react-icons/md";


const features = [
  {
    id: 0,
    title: "Empower Education",
    text: "Your donation supports access to menstrual products, allowing girls in Nigeria to attend school confidently and without interruption.",
    icon: GoSun,
  },
  {
    id: 1,
    title: "Break the Stigma",
    text: "Contribute to breaking cultural taboos surrounding menstruation, fostering a more inclusive and understanding society.",
    icon: GiBreakingChain,
  },
  {
    id: 2,
    title: "Global Impact:",
    text: "Support a cause that addresses a worldwide issue, contributing to the broader effort to eliminate period poverty and stigma.",
    icon: FaGlobe,
  },
  {
    id: 3,
    title: "Promote Health",
    text: "Enable the provision of sanitary pads, promoting better menstrual hygiene practices and reducing health risks associated with inadequate menstrual care.",
    icon: MdOutlineHealthAndSafety,
  },
  {
    id: 4,
    title: "Community Building",
    text: "Help build a supportive community that values the well-being and dignity of every girl, creating a positive impact on local and global communities.",
    icon: FaPeoplePulling,
  },
  {
    id: 5,
    title: "Educational Equality",
    text: "Bridge the educational gap by ensuring that menstruation does not hinder a girl's access to learning and academic success.",
    icon: SlEqualizer,
  },
  {
    id: 6,
    title: "Sustainable Solutions",
    text: " Contribute to the development of sustainable solutions for menstrual health, supporting initiatives that create long-term positive change.",
    icon: AiOutlineSafetyCertificate ,
  },
  {
    id: 7,
    title: "Make a Difference",
    text: "With your donation, you actively participate in making a tangible, positive difference in the lives of girls, fostering a world where every individual is free from period poverty and stigma.",
    icon: MdOutlineDifference,
  },
];

const WhyPartnerWithUs = () => {


  const [expandedText, setExpandedText] = useState(false);

  const handleTextClick = () => {
    setExpandedText(!expandedText);
  };

  
  const getTextToShow = () => {
    const truncatedText = `🌱 In Nigeria, a girl's first menstruation marks both a biological
      shift and often leads to a challenging transformation. Cultural stigma
      and societal discrimination during menstruation trigger a series of
      hardships for these girls.🌷 🍃 Beyond stigma, many Nigerian girls
      face limited access to menstrual products, preventing them from
      attending school and confining them to their homes.🌸 🌿 WhenStrual
      Dry strives to provide Nigerian schoolgirls with easy access to
      menstrual products like sanitary pads, enabling them to attend school
      confidently and comfortably, free from shame.🌺`;

    const textToShow = expandedText ? truncatedText : `${truncatedText.slice(0, 200)}...`;

    const seeMoreLessText = expandedText ? "See Less." : "See More.";

    return (
      <span>
        {textToShow}{" "}<span style={{fontSize: "16px", fontWeight: "bold", cursor: "pointer", color: "black"}}>{seeMoreLessText}</span>
      </span>
    );
  };



  return (
    <Box p={4} bg={"pink.100"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Why Partner With Us</Heading>
        <Text
          color={"gray.600"}
          fontSize={"xl"}
          onClick={handleTextClick}
          // cursor="pointer"
        >
          {getTextToShow()}
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"} _hover={{ bgColor: "gray.100" }}>
              <Box color={"green.400"} px={2}>
                <Icon as={feature.icon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} color={"#DA70D6"}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyPartnerWithUs;
