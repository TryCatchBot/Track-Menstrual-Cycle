"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import { GiEggClutch, GiCycle, GiSkeleton, GiThreeFriends } from "react-icons/gi";
import { GrGrow } from "react-icons/gr";
import { FaBaby } from "react-icons/fa";
import { RxLinkBreak2 } from "react-icons/rx";
import { TbMassage } from "react-icons/tb";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"} color={"#DA70D6"}>
          Health Benefits
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Embark on a journey of well-being and self-discovery by understanding
          the profound advantages that come with <mark>tracking your menstrual cycle
          and ovulation</mark>. Just like the tender care a garden needs for
          flourishing, monitoring these cycles provides essential insights into
          your body's rhythms. 🌿💖
        </Text>
      </Stack>

      <Container maxW={"8xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center" mb={20}>
          <Box _hover={{
        boxShadow: "md",
        bg: "#FFF5EE",
      }}>
          <Card
            heading={"Understanding Fertility"}
            icon={<Icon as={GiEggClutch} w={10} h={10} color={"#8BC34A"} />}
            description={
                '🌱 Provides insights into fertility, aiding family planning and conception.'   
            }
            // href={"#"}
           
          />
          </Box>
          <Box _hover={{
        boxShadow: "md",
        bg: "#FFF5EE",
      }}>
          <Card
            heading={"Improved Reproductive Health"}
            icon={<Icon as={GrGrow} w={10} h={10} color={"#FFC0CB"} />}
            description={
                '🌸 Offers a snapshot of reproductive health by monitoring cycle regularity and length.'   
            }
            // href={"#"}
           
          />
          </Box>
          <Box _hover={{
        boxShadow: "md",
        bg: "#FFF5EE",
      }}>
          <Card
            heading={"Effective Birth Control"}
            icon={<Icon as={FaBaby} w={10} h={10} color={"#8BC34A"} />}
            description={
                '🍃 Assists in natural family planning and choosing the right contraceptive methods.'   
            }
            // href={"#"}
           
          />
          </Box>
          <Box _hover={{
        boxShadow: "md",
        bg: "#FFF5EE",
      }}>
          <Card
            heading={"Early Detection of Irregularities"}
            icon={<Icon as={RxLinkBreak2} w={10} h={10} color={" #E91E63"} />}
            description={
                '🌺 Alerts to irregularities, acting as an early indicator of potential health issues.'   
            }
            // href={"#"}
           
          />
          </Box>
          {/* <Card
            heading={"Heading"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          /> */}
        </Flex>
        <Flex flexWrap="wrap" gridGap={6} justify="center" mb={20}>
        <Box _hover={{
        boxShadow: "md",
        bg: "#FFF5EE",
      }}>
<Card
            heading={"Relief from Menstrual Symptoms"}
            icon={<Icon as={GiCycle} w={10} h={10} color={"#4CAF50"} />}
            description={
              "🌿 Prepares for and manages symptoms like cramps, mood swings, and bloating."
            }
            // href={"#"}
            
          />
      </Box>
          
         <Box _hover={{
        boxShadow: "md",
        bg: "#FFF5EE",
      }}>
          <Card
            heading={"Bone Health Awareness"}
            icon={<Icon as={GiSkeleton} w={10} h={10}  color={"#006400"} />}
            description={
                '🌳 Links menstrual cycles to estrogen levels, promoting awareness of bone health.'   
            }
            // href={"#"}
           
          />
          </Box>
          <Box _hover={{
        boxShadow: "md",
        bg: "#FFF5EE",
      }}>
          <Card
            heading={"Reduced Stress and Anxiety"}
            icon={<Icon as={TbMassage} w={10} h={10} color={"#8BC34A"} />}
            description={
                '🌱 Reduces stress by anticipating menstruation and avoiding unexpected surprises.'   
            }
            // href={"#"}
           
          />
          </Box>
          <Box _hover={{
        boxShadow: "md",
        bg: "#FFF5EE",
      }}>
          <Card
            heading={"Enhanced Emotional Well-being"}
            icon={<Icon as={GiThreeFriends} w={10} h={10} color={"#FFD700"} />}
            description={
                '🌻 Empowers recognition and management of mood swings for emotional well-being.'   
            }
            // href={"#"}
           
          />
          </Box>
          {/* <Card
            heading={"Heading"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          /> */}
        </Flex>
      </Container>
    </Box>
  );
}
