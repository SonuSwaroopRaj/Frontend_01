import React, { useState } from 'react';

const FeedbackForm = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Answers:', answers);
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question1">Question 1:</label>
          <input
            type="text"
            id="question1"
            name="question1"
            value={answers.question1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question2">Question 2:</label>
          <input
            type="text"
            id="question2"
            name="question2"
            value={answers.question2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question3">Question 3:</label>
          <input
            type="text"
            id="question3"
            name="question3"
            value={answers.question3}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="question4">Question 4:</label>
          <input
            type="text"
            id="question4"
            name="question4"
            value={answers.question4}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
