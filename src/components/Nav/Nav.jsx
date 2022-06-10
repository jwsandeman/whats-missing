import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Icons from './Icons';
import Links from './Links';
import Logo from './Logo';

const Nav = () => {
  return (
    <Flex
      minWidth="max-content"
      maxHeight="48px"
      alignItems="center"
      gap="2"
      bg="yellow.200"
    >
      <Box p="8" bg="green">
        <Heading size="md">What's Missing?</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2" bg="green">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
        <ColorModeSwitcher justifySelf="flex-end" />
      </ButtonGroup>
    </Flex>
    // <nav>
    //   <p>Nav</p>
    //   <Logo />
    //   <Links />
    //   <Icons />
    // </nav>
  );
};

export default Nav;
