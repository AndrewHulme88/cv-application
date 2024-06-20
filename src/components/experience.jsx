import React, {useState} from 'react';

const Experience = ({onSubmit, initialValues}) => {
  const [company, setCompany] = useState(initialValues.company || "");
  const [position, setPosition] = useState(initialValues.position || "");
  const [responsibilities, setResponsibilities] = useState(initialValues.responsibilities || "");
  const [dateFrom, setDateFrom] = useState(initialValues.dateFrom || "");
  const [dateTo, setDateTo] = useState(initialValues.dateTo || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({company, position, responsibilities, dateFrom, dateTo});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Company' />
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder='Position' />
      <textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} placeholder='Main Reasponsibilities'></textarea>
      <input type="text" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} placeholder='Date From' />
      <input type="text" value={dateTo} onChange={(e) => setDateTo(e.target.value)} placeholder='Date To' />
    </form>
  );
};

export default Experience;
