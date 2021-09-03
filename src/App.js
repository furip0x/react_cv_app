import React, { useState } from 'react'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import EducationalExp from './components/EducationalExp/EducationalExp'
import Experience from './components/Experiences/Experience'

function App() {
  const [educationItems, setEducationItems] = useState([])
  const [experienceItems, setExperienceItems] = useState([])

  const handleClick = (type) => {
    if (type === 'educationItems') {
      setEducationItems((prevEduItems) => [
        ...prevEduItems,
        new Date().getTime().toString(), //adding new id
      ])
    } else {
      setExperienceItems((prevExpItems) => [
        ...prevExpItems,
        new Date().getTime().toString(), //adding new id
      ])
    }
  }

  const handleDelete = (type, id) => {
    if (type === 'educationItems') {
      setEducationItems((prevEduItems) => {
        let newList = prevEduItems.filter((key) => key !== id)
        return newList
      })
    } else {
      setExperienceItems((prevExpItems) => {
        let newList = prevExpItems.filter((key) => key !== id)
        return newList
      })
    }
  }

  const eduComponents = educationItems.map((id) => (
    <EducationalExp key={id} id={id} handleDelete={handleDelete} />
  ))

  const expComponents = experienceItems.map((id) => (
    <Experience key={id} id={id} handleDelete={handleDelete} />
  ))

  return (
    <div className='cv-app'>
      <h1 className='cv-app-title'>React CV App</h1>
      <div className='cv-app-content'>
        <section className='cv-section'>
          <h2 className='cv-section-title'>General Information</h2>
          <GeneralInfo />
        </section>
        <section className='cv-section'>
          <h2 className='cv-section-title'>Educational Experience</h2>
          {eduComponents}
          <div className='form-group'>
            <button
              className='submit-btn'
              onClick={() => handleClick('educationItems')}
            >
              Add
            </button>
          </div>
        </section>
        <section className='cv-section'>
          <h2 className='cv-section-title'>Job Experience</h2>
          {expComponents}
          <div className='form-group'>
            <button
              className='submit-btn'
              onClick={() => handleClick('experienceItems')}
            >
              Add
            </button>
          </div>
        </section>
        <div className='form-group'>
          <button
            className='submit-btn print'
            onClick={() => window.print()}
            disabled={
              eduComponents.length > 0 && expComponents.length > 0
                ? ''
                : 'disabled'
            }
          >
            Print
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
