import React, { useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Input,
  IconButton, Icon
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";
import { GiCycle } from "react-icons/gi";
import Modal from "../../assets/layout/Modal";



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = ({ onTrackPeriodClick }) => {

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

    const currentYear = new Date().getFullYear();


  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack align={"center"}>
        <ListHeader>Stay up to date</ListHeader>
        <Stack direction={"row"}>
          <Input
            placeholder={"Your email address"}
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            border={0}
            _focus={{
              bg: "whiteAlpha.300",
            }}
          />
          <IconButton
            bg={"#DA70D6"}
            color={useColorModeValue("white", "gray.800")}
            _hover={{
              bg: "Pink",
            }}
            aria-label="Subscribe"
            icon={<BiMailSend />}
          />
        </Stack>
      </Stack>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Box as="a" href={"#"} onClick={handleTrackPeriodClick}>
              Track Cycle
            </Box>
            {/* <Box as="a" href={"#"}>
            Track Ovulation
            </Box> */}
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Box as="a" href={"#"}>
                Health Tips
              </Box>
              <Tag
                size={"sm"}
                bg={"#DA70D6"}
                ml={2}
                color={"white"}
              >
                coming soon
              </Tag>
            </Stack>
            
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Box as="a" href={"/whenStrual-dry"}>
                WhenStrualDry
              </Box>
              <Tag
                size={"sm"}
                bg={"#DA70D6"}
                ml={2}
                color={"white"}
              >
                #endPeriodPoverty
              </Tag>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Organization</ListHeader>
            <Box as="a" href={"#"}>
              About Us
            </Box>
            
            {/* <Box as="a" href={"#"}>
              Careers
            </Box> */}
            <Box as="a" href={"#"}>
              Contact Us
            </Box>
            {/* <Box as="a" href={"#"}>
              Volunteer
            </Box> */}
            <Box as="a" href={"#"}>
              Partner With Us
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Get Involved</ListHeader>
            <Box as="a" href={"#"}>
              Volunteer
            </Box>
            <Box as="a" href={"#"}>
              Corporate Sponsor
            </Box>
            <Box as="a" href={"#"}>
              Become an Advocate
            </Box>
            {/* <Box as="a" href={"#"}>
              Law Enforcement
            </Box> */}
            {/* <Box as="a" href={"#"}>
              Status
            </Box> */}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={"#"}>
              Facebook
            </Box>
            <Box as="a" href={"#"}>
              Twitter
            </Box>
            {/* <Box as="a" href={"#"}>
              Dribbble
            </Box> */}
            <Box as="a" href={"#"}>
              Instagram
            </Box>
            <Box as="a" href={"#"}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
            {/* <GiCycle color="#DA70D6" />
          <span>whenstrual</span> */}
          <a href="/">
          <Box
            color={"#DA70D6"}
            style={{ flexDirection: "row", justifyContent: "initial" }}
          >
           
            {<Icon as={GiCycle} w={8} h={10} color={"#DA70D6"} />}{" "}
            <span style={{fontWeight: "bold", fontSize: "20px"}}>whenstrual</span>
          </Box>
          </a>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {currentYear} <a href="/" style={{color: "#DA70D6"}}>whenstrual</a>. All rights reserved
        </Text>
      </Box>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
      />
    </Box>
  );
};

export default Footer;
