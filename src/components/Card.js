import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (<VStack backgroundColor="white"
    borderRadius="md"
    boxShadow="md"
    overflow="hidden"
    align="start"
    spacing={4} p={4}>
    <Image width="100%" src={imageSrc}/>
    <VStack align="start" spacing={2}>
      <Heading color="black" size="md">{title}</Heading>

      <Text color="gray.600">{description}</Text>
      <HStack spacing={1}>
 
         <Text color="black" fontWeight="bold">
          See more
           </Text>

        <button>
          
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
         </button>
     
        
    </HStack>
    </VStack>
  </VStack>);


};

export default Card;
