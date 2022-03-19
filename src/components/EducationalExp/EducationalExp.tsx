import React, { useState } from "react"
import EducationalEdit from "./EducationalEdit"
import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  HStack,
  useToast,
} from "@chakra-ui/react"

interface IEducationalExp {
  id: string
  handleDelete: (type: string, id: string) => void
}

interface IEducationInfo {
  schoolName: string
  titleOfStudy: string
  dateFrom: string
  dateTo: string
}

const EducationalExp = ({ id, handleDelete }: IEducationalExp) => {
  const toast = useToast()
  const [edit, setEdit] = useState<boolean>(false)
  const [educationInfo, setEducationInfo] = useState<IEducationInfo>({
    schoolName: "",
    titleOfStudy: "",
    dateFrom: "",
    dateTo: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEdit((prevEdit) => !prevEdit)
    toast({
      title: "Changes saved",
      status: "success",
      duration: 2000,
    })
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEducationInfo((prevInfo) => {
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
              <FormLabel htmlFor="schoolName">School Name:</FormLabel>
              <Input
                type="text"
                id="schoolName"
                name="schoolName"
                value={educationInfo.schoolName}
                onChange={handleInput}
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="titleOfStudy">Title of Study:</FormLabel>
              <Input
                type="text"
                id="titleOfStudy"
                name="titleOfStudy"
                value={educationInfo.titleOfStudy}
                onChange={handleInput}
                required
              />
            </FormControl>
          </Flex>
          <Flex direction={["column", "row"]} columnGap="30" rowGap="15">
            <FormControl isRequired>
              <FormLabel htmlFor="dateFrom">From:</FormLabel>
              <Input
                type="date"
                id="dateFrom"
                name="dateFrom"
                value={educationInfo.dateFrom}
                onChange={handleInput}
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="dateTo">To:</FormLabel>
              <Input
                type="date"
                id="dateTo"
                name="dateTo"
                value={educationInfo.dateTo}
                onChange={handleInput}
                required
              />
            </FormControl>
          </Flex>
          <HStack justifyContent="center" spacing="4" mt="3">
            <Button type="submit" colorScheme="green" variant="solid">
              Save
            </Button>
            <Button
              colorScheme="red"
              variant="solid"
              onClick={() => handleDelete("educationItems", id)}
            >
              Delete
            </Button>
          </HStack>
        </Flex>
      </form>
    )
  } else {
    return <EducationalEdit {...educationInfo} editForm={editForm} />
  }
}

export default EducationalExp
