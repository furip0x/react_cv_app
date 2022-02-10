import React, { useState } from "react"
import EducationalEdit from "./EducationalEdit"

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
  const [edit, setEdit] = useState<boolean>(true)
  const [educationInfo, setEducationInfo] = useState<IEducationInfo>({
    schoolName: "",
    titleOfStudy: "",
    dateFrom: "",
    dateTo: "",
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEducationInfo((prevInfo) => {
      return { ...prevInfo, [name]: value }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setEdit((prevEdit) => !prevEdit)
  }

  if (!edit) {
    return <EducationalEdit {...educationInfo} handleSubmit={handleSubmit} />
  } else {
    return (
      <form className="cv-section-form">
        <div className="form-group">
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={educationInfo.schoolName}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="titleOfStudy">Title of Study:</label>
          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            value={educationInfo.titleOfStudy}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateFrom">From:</label>
          <input
            type="date"
            id="dateFrom"
            name="dateFrom"
            value={educationInfo.dateFrom}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateTo">To:</label>
          <input
            type="date"
            id="dateTo"
            name="dateTo"
            value={educationInfo.dateTo}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group btn-group">
          <button className="submit-btn" onClick={handleSubmit}>
            Save
          </button>
          <button
            className="submit-btn"
            onClick={() => handleDelete("educationItems", id)}
          >
            Delete
          </button>
        </div>
      </form>
    )
  }
}

export default EducationalExp
