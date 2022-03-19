import React, { useState } from "react"
import GeneralInfo from "./components/GeneralInfo/GeneralInfo"
import EducationalExp from "./components/EducationalExp/EducationalExp"
import Experience from "./components/Experiences/Experience"
import {
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Button,
  useToast,
  Divider,
} from "@chakra-ui/react"

function App() {
  const toast = useToast()
  const [educationItems, setEducationItems] = useState<string[]>([])
  const [experienceItems, setExperienceItems] = useState<string[]>([])

  const handleClick = (type: string) => {
    if (type === "educationItems") {
      setEducationItems((prevEduItems) => [
        ...prevEduItems,
        new Date().getTime().toString(),
      ])
    } else {
      setExperienceItems((prevExpItems) => [
        ...prevExpItems,
        new Date().getTime().toString(),
      ])
    }
  }

  const handleDelete = (type: string, id: string) => {
    if (type === "educationItems") {
      setEducationItems((prevEduItems) => {
        let newList = prevEduItems.filter((itemId) => itemId !== id)
        return newList
      })
    } else {
      setExperienceItems((prevExpItems) => {
        let newList = prevExpItems.filter((itemId) => itemId !== id)
        return newList
      })
    }
    toast({
      title: "Successfully deleted",
      status: "success",
      duration: 2000,
    })
  }

  const eduComponents = educationItems.map((id) => (
    <EducationalExp key={id} id={id} handleDelete={handleDelete} />
  ))

  const expComponents = experienceItems.map((id) => (
    <Experience key={id} id={id} handleDelete={handleDelete} />
  ))

  const isPrint = eduComponents.length > 0 && expComponents.length > 0

  return (
    <Box py="8" px="6" backgroundColor="gray.50">
      <Heading as="h1" mb="8" textAlign="center">
        React CV App
      </Heading>
      <Box
        maxW="600"
        border="2px"
        borderColor="gray.200"
        p="8"
        mx="auto"
        backgroundColor="white"
      >
        <VStack align="stretch" spacing="30px">
          <Box>
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="400"
              textAlign="center"
              mb="5"
            >
              General Information
            </Heading>
            <GeneralInfo />
          </Box>
          <Divider />
          <Box>
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="400"
              textAlign="center"
              mb="5"
            >
              Educational Experience
            </Heading>
            <VStack spacing="20px" align="stretch">
              {eduComponents}
            </VStack>
            <HStack justifyContent="center" mt="5">
              <Button
                colorScheme="blue"
                variant="solid"
                onClick={() => handleClick("educationItems")}
              >
                Add
              </Button>
            </HStack>
          </Box>
          <Divider />
          <Box>
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="400"
              textAlign="center"
              mb="5"
            >
              Job Experience
            </Heading>
            <VStack spacing="20px" align="stretch">
              {expComponents}
            </VStack>
            <HStack justifyContent="center" mt="5">
              <Button
                colorScheme="blue"
                variant="solid"
                onClick={() => handleClick("experienceItems")}
              >
                Add
              </Button>
            </HStack>
          </Box>
          {isPrint ? (
            <Flex justifyContent="center">
              <Button colorScheme="purple" onClick={() => window.print()}>
                Print
              </Button>
            </Flex>
          ) : null}
        </VStack>
      </Box>
    </Box>
  )
}

export default App
