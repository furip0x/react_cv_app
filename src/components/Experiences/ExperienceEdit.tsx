import React from "react"
import editIcon from "../../edit.png"

interface IExperienceEdit {
  companyName: string
  positionTitle: string
  dateFrom: string
  dateTo: string
  mainTasks: string
  handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ExperienceEdit = ({
  companyName,
  positionTitle,
  dateFrom,
  dateTo,
  mainTasks,
  handleEdit,
}: IExperienceEdit) => {
  return (
    <div className="form-edit">
      <div className="form-edit-content">
        <div className="form-edit-group">
          <strong>Company Name:</strong> {companyName}
        </div>
        <div className="form-edit-group">
          <strong>Position:</strong> {positionTitle}
        </div>
        <div className="form-edit-group">
          <strong>From:</strong> {dateFrom}
        </div>
        <div className="form-edit-group">
          <strong>To:</strong> {dateTo}
        </div>
        <div className="form-edit-group">
          <strong>Main Tasks:</strong> {mainTasks}
        </div>
      </div>
      <div className="form-edit-edit">
        <button onClick={handleEdit}>
          <img src={editIcon} alt="edit" />
        </button>
      </div>
    </div>
  )
}

export default ExperienceEdit
