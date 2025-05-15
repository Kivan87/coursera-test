import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

//Open the LandingSection.js file. 
//Implement the below UI to provide a landing section for the app with an avatar, 
//a greeting and a brief role description.For the data,
// use the variables provided at the top of the file(greeting, bio1 and bio2) 
//and not personal data.For the avatar you can use the next url: 
//https://i.pravatar.cc/150?img=7 All the components you need have been already imported for you.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center">
      <Avatar size="2xl"
        name="Pete" src="https://i.pravatar.cc/150?img=7" mb={4} />
      <Heading as="h2" size="xs" color="white">
        {greeting}      </Heading>
      <Heading as="h1" size="lg" color="white">        {bio1}
      </Heading>      <Heading as="h1" size="lg" color="white">
        {bio2}      </Heading>    </VStack>

  </FullScreenSection>
);

export default LandingSection;
