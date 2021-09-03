import React, { useState } from 'react'
import ExperienceEdit from './ExperienceEdit'

const Experience = ({ id, handleDelete }) => {
  const [edit, setEdit] = useState(true)
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: '',
    positionTitle: '',
    dateFrom: '',
    dateTo: '',
    mainTasks: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setExperienceInfo((prevInfo) => {
      return { ...prevInfo, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEdit((prevEdit) => !prevEdit)
    console.log(experienceInfo)
  }

  if (!edit) {
    return <ExperienceEdit {...experienceInfo} handleEdit={handleSubmit} />
  } else {
    return (
      <form className='cv-section-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='companyName'>Company Name:</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            value={experienceInfo.companyName}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='positionTitle'>Position Title:</label>
          <input
            type='text'
            id='positionTitle'
            name='positionTitle'
            value={experienceInfo.positionTitle}
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
            value={experienceInfo.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='dataTo'>To:</label>
          <input
            type='date'
            id='dateTo'
            name='dateTo'
            value={experienceInfo.phoneNumber}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='mainTasks'>Main Tasks:</label>
          <textarea
            type='mainTasks'
            id='mainTasks'
            name='mainTasks'
            value={experienceInfo.mainTasks}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group btn-group'>
          <button className='submit-btn'>Save</button>
          <button
            className='submit-btn'
            onClick={() => handleDelete('educationIds', id)}
          >
            Delete
          </button>
        </div>
      </form>
    )
  }
}

export default Experience
