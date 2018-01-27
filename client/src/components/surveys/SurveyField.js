import React from 'react';

const SurveyField = ({ input, label }) => (
  <div>
    <label htmlFor="">{label}</label>
    <input {...input} />
  </div>
);

export default SurveyField;
