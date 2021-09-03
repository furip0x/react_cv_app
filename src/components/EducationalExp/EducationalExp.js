import React, { useState } from 'react'
import EducationalEdit from './EducationalEdit'

const EducationalExp = ({ id, handleDelete }) => {
  const [edit, setEdit] = useState(true)
  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateFrom: '',
    dateTo: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setEducationInfo((prevInfo) => {
      return { ...prevInfo, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEdit((prevEdit) => !prevEdit)
  }

  if (!edit) {
    return <EducationalEdit {...educationInfo} handleEdit={handleSubmit} />
  } else {
    return (
      <form className='cv-section-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='schoolName'>School Name:</label>
          <input
            type='text'
            id='schoolName'
            name='schoolName'
            value={educationInfo.schoolName}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='titleOfStudy'>Title of Study:</label>
          <input
            type='text'
            id='titleOfStudy'
            name='titleOfStudy'
            value={educationInfo.titleOfStudy}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='dateFrom'>From:</label>
          <input
            type='date'
            id='dateFrom'
            name='dateFrom'
            value={educationInfo.dateFrom}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='dateTo'>To:</label>
          <input
            type='date'
            id='dateTo'
            name='dateTo'
            value={educationInfo.dateTo}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group btn-group'>
          <button className='submit-btn'>Save</button>
          <button
            className='submit-btn'
            onClick={() => handleDelete('educationItems', id)}
          >
            Delete
          </button>
        </div>
      </form>
    )
  }
}

export default EducationalExp
