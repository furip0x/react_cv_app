import React from "react"
import editIcon from "../../edit.png"

interface IGeneralInfoEdit {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  editForm: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const GeneralInfoedit = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  editForm,
}: IGeneralInfoEdit) => {
  return (
    <div className="form-edit">
      <div className="form-edit-content">
        <div className="form-edit-group">
          <strong>First Name:</strong> {firstName}
        </div>
        <div className="form-edit-group">
          <strong>Last Name:</strong> {lastName}
        </div>
        <div className="form-edit-group">
          <strong>Email:</strong> {email}
        </div>
        <div className="form-edit-group">
          <strong>Phone Number:</strong> {phoneNumber}
        </div>
      </div>
      <div className="form-edit-edit">
        <button onClick={editForm}>
          <img src={editIcon} alt="edit" />
        </button>
      </div>
    </div>
  )
}

export default GeneralInfoedit
