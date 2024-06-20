import React, {useState} from 'react';

const Education = ({onSubmit, initialValues}) => {
  const [school, setSchool] = useState(initialValues.school || "");
  const [titleOfStudy, setTitleOfStudy] = useState(initialValues.titleOfStudy || "");
  const [dateOfStudy, setDateOfStudy] = useState(initialValues.dateOfStudy);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({school, titleOfStudy, dateOfStudy});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={school} onChange={(e) =>setSchool(e.target.value)} placeholder='School' />
      <input type="text" value={titleOfStudy} onChange={(e) =>setTitleOfStudy(e.target.value)} placeholder='Title of Study' />
      <input type="text" value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)} placeholder='Date of Study' />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Education;
