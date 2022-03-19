import React from "react"
import { Flex, Text, Button } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"

interface IEducationalEdit {
  schoolName: string
  titleOfStudy: string
  dateFrom: string
  dateTo: string
  editForm: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const EducationalEdit = ({
  schoolName,
  titleOfStudy,
  dateFrom,
  dateTo,
  editForm,
}: IEducationalEdit) => {
  return (
    <Flex>
      <Flex flex="1" flexDirection="column" gap="1">
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            School Name:
          </Text>
          <Text>{schoolName}</Text>
        </Flex>
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            Study:
          </Text>
          <Text>{titleOfStudy}</Text>
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

export default EducationalEdit
