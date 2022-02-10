import React, { useState } from "react"
import GeneralInfoEdit from "./GeneralInfoEdit"

interface IGeneralInformation {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

const GeneralInfo = () => {
  const [edit, setEdit] = useState<boolean>(false)
  const [generalInformation, setGeneralInformation] =
    useState<IGeneralInformation>({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    })

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setEdit(true)
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
      <form className="cv-section-form">
        <div className="form-group">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={generalInformation.firstName}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={generalInformation.lastName}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={generalInformation.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={generalInformation.phoneNumber}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <button className="submit-btn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    )
  } else {
    return <GeneralInfoEdit {...generalInformation} editForm={editForm} />
  }
}

export default GeneralInfo
