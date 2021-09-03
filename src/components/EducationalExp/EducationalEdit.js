import React from 'react'
import editIcon from '../../edit.png'

const EducationalEdit = ({
  schoolName,
  titleOfStudy,
  dateFrom,
  dateTo,
  handleEdit,
}) => {
  return (
    <div className='form-edit'>
      <div className='form-edit-content'>
        <div className='form-edit-group'>
          <strong>School Name:</strong> {schoolName}
        </div>
        <div className='form-edit-group'>
          <strong>Study:</strong> {titleOfStudy}
        </div>
        <div className='form-edit-group'>
          <strong>From:</strong> {dateFrom}
        </div>
        <div className='form-edit-group'>
          <strong>To:</strong> {dateTo}
        </div>
      </div>
      <div className='form-edit-edit'>
        <button onClick={handleEdit}>
          <img src={editIcon} alt='edit' />
        </button>
      </div>
    </div>
  )
}

export default EducationalEdit
