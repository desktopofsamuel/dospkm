import React from "react";
import {
  Container,
  Flex,
  Box,
  IconButton,
  List,
  ListItem,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Center,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container as="header" maxW="1080px">
        <Flex as="nav" alignItems="center">
          <Link href="/">
            <Text fontFamily="heading" cursor="pointer" variant="noeffect">
              Desktop of Samuel
            </Text>
          </Link>
          <Spacer />
          <List
            as="nav"
            display={{ base: "none", md: "flex" }}
            listStyleType="none"
            flexDir="row"
            alignItems="center"
            gap="4"
            fontFamily="heading"
          >
            <ListItem>
              <Link href="/testing">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/guides">Guides</Link>
            </ListItem>
            <ListItem>
              <Link href="/resources">Resources</Link>
            </ListItem>
            <IconButton
              aria-label="Switch Color Mode"
              icon={colorMode === `light` ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </List>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center">
            <Center>
              <Flex
                fontFamily="heading"
                fontSize="3xl"
                fontWeight="600"
                letterSpacing="tight"
                flexDirection="column"
                textAlign="center"
                alignItems="center"
              >
                <ListItem>
                  <Link href="/testing">Home</Link>
                </ListItem>
                <ListItem>
                  <Link href="/guides">Guides</Link>
                </ListItem>
                <ListItem>
                  <Link href="/resources">Resources</Link>
                </ListItem>
                <Box h="24px" />
                <IconButton
                  width="48px"
                  height="48px"
                  borderRadius="50%"
                  aria-label="Switch Color Mode"
                  icon={colorMode === `light` ? <SunIcon /> : <MoonIcon />}
                  onClick={toggleColorMode}
                />
              </Flex>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
