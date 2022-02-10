import React, { useState } from "react"
import ExperienceEdit from "./ExperienceEdit"

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
  const [edit, setEdit] = useState<boolean>(true)
  const [experienceInfo, setExperienceInfo] = useState<IExperiencenfo>({
    companyName: "",
    positionTitle: "",
    dateFrom: "",
    dateTo: "",
    mainTasks: "",
  })

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setExperienceInfo((prevInfo) => {
      return { ...prevInfo, [name]: value }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setEdit((prevEdit) => !prevEdit)
    console.log(experienceInfo)
  }

  if (!edit) {
    return <ExperienceEdit {...experienceInfo} handleEdit={handleSubmit} />
  } else {
    return (
      <form className="cv-section-form">
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={experienceInfo.companyName}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="positionTitle">Position Title:</label>
          <input
            type="text"
            id="positionTitle"
            name="positionTitle"
            value={experienceInfo.positionTitle}
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
            value={experienceInfo.dateFrom}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dataTo">To:</label>
          <input
            type="date"
            id="dateTo"
            name="dateTo"
            value={experienceInfo.dateTo}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mainTasks">Main Tasks:</label>
          <textarea
            id="mainTasks"
            name="mainTasks"
            value={experienceInfo.mainTasks}
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
            onClick={() => handleDelete("educationIds", id)}
          >
            Delete
          </button>
        </div>
      </form>
    )
  }
}

export default Experience
