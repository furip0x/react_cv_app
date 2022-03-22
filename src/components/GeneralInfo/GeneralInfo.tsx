import React, { useState } from "react"
import GeneralInfoEdit from "./GeneralInfoEdit"
import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  HStack,
  useToast,
} from "@chakra-ui/react"

interface IGeneralInformation {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

const GeneralInfo = () => {
  const toast = useToast()
  const [edit, setEdit] = useState<boolean>(false)
  const [generalInformation, setGeneralInformation] =
    useState<IGeneralInformation>({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEdit(true)
    toast({
      title: "Changes saved",
      status: "success",
      duration: 2000,
    })
    // }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setGeneralInformation((prevInfo) => {
      return { ...prevInfo, [name]: value }
    })
  }

  const editForm = () => {
    setEdit((prevEdit) => !prevEdit)
  }

  if (!edit) {
    return (
      <form onSubmit={handleSubmit}>
        <Flex direction="column" rowGap="15">
          <Flex direction={["column", "row"]} columnGap="30" rowGap="15">
            <FormControl isRequired>
              <FormLabel htmlFor="firstName">First name:</FormLabel>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={generalInformation.firstName}
                onChange={handleInput}
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="lastName">Last name:</FormLabel>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={generalInformation.lastName}
                onChange={handleInput}
                required
              />
            </FormControl>
          </Flex>
          <Flex direction={["column", "row"]} columnGap="30" rowGap="15">
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={generalInformation.email}
                onChange={handleInput}
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={generalInformation.phoneNumber}
                onChange={handleInput}
              />
            </FormControl>
          </Flex>
          <HStack justifyContent="center" mt="3">
            <Button type="submit" colorScheme="green" variant="solid">
              Save
            </Button>
          </HStack>
        </Flex>
      </form>
    )
  } else {
    return <GeneralInfoEdit {...generalInformation} editForm={editForm} />
  }
}

export default React.memo(GeneralInfo)
