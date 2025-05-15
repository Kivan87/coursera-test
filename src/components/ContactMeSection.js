import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {

      //de adaugat valorile
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',


    },

      validationSchema:
     Yup.object({
        firstName: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        type: Yup.string().required('Type of enquiry is required'),
        comment: Yup.string().required('Message is required'),
      }),


        onSubmit: async (values) => {      // Call the submit function with form values     
         const response = await submit(values);    },  });  // Effect to handle response from the submit function  
         useEffect(() =>
           { if (response) {      
        if (response.type === 'success') {  
          onOpen("success", `Thank you, ${formik.values.firstName}! Your message has been sent.`);     
              formik.resetForm(); // Reset the form on success    
         } else if (response.type === 'error') 
          {      
            onOpen("error", response.message); }}}, 
            [response, onOpen, formik]);


     return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" py={16} spacing={8}  >
      <VStack w="1024px" p={32} alignItems="flex-start">

        <Heading as="h1" id="contactme-section">  Contact me </Heading>
        <Box p={6} rounded="md" w="100%">

          <form onSubmit={formik.handleSubmit}>

          <VStack spacing={4}>
              
              <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" name="firstName"
                  {...formik.getFieldProps('firstName')} />
                
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>

                <FormLabel htmlFor="email">Email Address</FormLabel>

                <Input id="email" name="email" type="email"
                  {...formik.getFieldProps('email')} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && Boolean(formik.errors.type)}>

                <FormLabel htmlFor="type">Type of enquiry</FormLabel>

                <Select id="type" name="type"
                  {...formik.getFieldProps('type')}                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select> <FormErrorMessage>{formik.errors.type}</FormErrorMessage>

              </FormControl>
              <FormControl isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}>

                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea id="comment" name="comment" height={250}  {...formik.getFieldProps('comment')} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> Submit</Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>);
};


export default LandingSection;
