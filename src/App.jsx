import { useState } from 'react'
import './App.css'
import Info from './components/info.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'
import EditButton from './components/edit-button.jsx'

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [experienceInfo, setExperienceInfo] = useState({});

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationInfoSubmit = (data) => {
    setEducationInfo(data);
  };

  const handleExperienceInfoSubmit = (data) => {
    setExperienceInfo(data);
  };

  return (
    <div className="App">
      <h1>CV Builder</h1>

      <h2>General Information</h2>
      {Object.keys(generalInfo).length === 0 ? (
        <Info onSubmit={handleGeneralInfoSubmit} initialValues={generalInfo} />
      ) : (
        <>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
          <EditButton onClick={() => setGeneralInfo({})} />
        </>
      )}

      <h2>Education</h2>
      {Object.keys(educationInfo).length === 0 ? (
        <Education onSubmit={handleEducationInfoSubmit} initialValues={educationInfo} />
      ) : (
        <>
          <p>School: {educationInfo.school}</p>
          <p>Title of Study: {educationInfo.titleOfStudy}</p>
          <p>Date of Study: {educationInfo.dateOfStudy}</p>
          <EditButton onClick={() => setEducationInfo({})} />
        </>
      )}

      <h2>Experience</h2>
      {Object.keys(experienceInfo).length === 0 ? (
        <Experience onSubmit={handleExperienceInfoSubmit} initialValues={experienceInfo} />
      ) : (
        <>
          <p>Company: {experienceInfo.company}</p>
          <p>Position: {experienceInfo.position}</p>
          <p>Main Responsibilities: {experienceInfo.responsibilities}</p>
          <p>Date From: {experienceInfo.dateFrom}</p>
          <p>Date To: {experienceInfo.dateTo}</p>
          <EditButton onClick={() => setExperienceInfo({})} />
        </>
      )}

    </div>
  );
}

export default App
