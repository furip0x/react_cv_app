import React from "react"
import { Flex, Text, Button } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"

interface IExperienceEdit {
  companyName: string
  positionTitle: string
  dateFrom: string
  dateTo: string
  mainTasks: string
  editForm: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ExperienceEdit = ({
  companyName,
  positionTitle,
  dateFrom,
  dateTo,
  mainTasks,
  editForm,
}: IExperienceEdit) => {
  return (
    <Flex>
      <Flex flex="1" flexDirection="column" gap="1">
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            Company Name:
          </Text>
          <Text>{companyName}</Text>
        </Flex>
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            Position:
          </Text>
          <Text>{positionTitle}</Text>
        </Flex>
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            From:
          </Text>
          <Text>{dateFrom}</Text>
        </Flex>
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            To:
          </Text>
          <Text>{dateTo}</Text>
        </Flex>
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            Main Tasks:
          </Text>
          <Text>{mainTasks}</Text>
        </Flex>
      </Flex>
      <Button
        colorScheme="green"
        variant="outline"
        size="sm"
        p="0.5"
        onClick={editForm}
      >
        <EditIcon />
      </Button>
    </Flex>
  )
}

export default ExperienceEdit
