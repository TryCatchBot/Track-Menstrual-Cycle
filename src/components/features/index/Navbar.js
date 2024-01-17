import React, { useState } from "react";
import Modal from "../../assets/layout/Modal";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiCycle } from "react-icons/gi";

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const Navbar = ({ onTrackPeriodClick }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        zIndex="1000"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <a href="/">
          <Box
            color={"#DA70D6"}
            style={{ flexDirection: "row", justifyContent: "initial" }}
          >
           
            {<Icon as={GiCycle} w={8} h={10} color={"#DA70D6"} />}{" "}
            <span style={{fontWeight: "bold", fontSize: "20px"}}>whenstrual</span>
          </Box>
          </a>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              <Button
                onClick={handleTrackPeriodClick}
                colorScheme="teal"
                style={{ color: "#DA70D6" }}
                variant="outline"
              >
                Track Period
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default Navbar;
