import React from "react"
import { Flex, Text, Button } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"

interface IGeneralInfoEdit {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  editForm: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const GeneralInfoEdit = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  editForm,
}: IGeneralInfoEdit) => {
  return (
    <Flex>
      <Flex flex="1" flexDirection="column" gap="1">
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            First name:
          </Text>
          <Text>{firstName}</Text>
        </Flex>
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            Last name:
          </Text>
          <Text>{lastName}</Text>
        </Flex>
        <Flex flex="1">
          <Text pr="2" fontWeight="700">
            Email:
          </Text>
          <Text>{email}</Text>
        </Flex>
        <Flex flex="1">
          <Text fontWeight="700" pr="2">
            Phone number:
          </Text>
          <Text>{phoneNumber}</Text>
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

export default GeneralInfoEdit
