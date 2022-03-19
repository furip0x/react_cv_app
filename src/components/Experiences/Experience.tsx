import React, { useState } from "react"
import ExperienceEdit from "./ExperienceEdit"
import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Textarea,
  useToast,
} from "@chakra-ui/react"

interface IExperience {
  id: string
  handleDelete: (type: string, id: string) => void
}

interface IExperiencenfo {
  companyName: string
  positionTitle: string
  dateFrom: string
  dateTo: string
  mainTasks: string
}

const Experience = ({ id, handleDelete }: IExperience) => {
  const toast = useToast()
  const [edit, setEdit] = useState<boolean>(false)
  const [experienceInfo, setExperienceInfo] = useState<IExperiencenfo>({
    companyName: "",
    positionTitle: "",
    dateFrom: "",
    dateTo: "",
    mainTasks: "",
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

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setExperienceInfo((prevInfo) => {
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
              <FormLabel htmlFor="companyName">Company Name:</FormLabel>
              <Input
                type="text"
                id="companyName"
                name="companyName"
                value={experienceInfo.companyName}
                onChange={handleInput}
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="positionTitle">Position Title:</FormLabel>
              <Input
                type="text"
                id="positionTitle"
                name="positionTitle"
                value={experienceInfo.positionTitle}
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
                value={experienceInfo.dateFrom}
                onChange={handleInput}
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="dataTo">To:</FormLabel>
              <Input
                type="date"
                id="dateTo"
                name="dateTo"
                value={experienceInfo.dateTo}
                onChange={handleInput}
                required
              />
            </FormControl>
          </Flex>
          <Flex direction={["column", "row"]} columnGap="30" rowGap="15">
            <FormControl isRequired>
              <FormLabel htmlFor="mainTasks">Main Tasks:</FormLabel>
              <Textarea
                id="mainTasks"
                name="mainTasks"
                value={experienceInfo.mainTasks}
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
              onClick={() => handleDelete("educationIds", id)}
            >
              Delete
            </Button>
          </HStack>
        </Flex>
      </form>
    )
  } else {
    return <ExperienceEdit {...experienceInfo} editForm={editForm} />
  }
}

export default Experience
