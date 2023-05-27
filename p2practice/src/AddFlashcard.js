import React, { useState } from 'react';

const AddFlashcard = ({ onAddFlashcard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.trim() === '' || answer.trim() === '') {
      return; // Prevent adding empty flashcards
    }

    const newFlashcard = {
      question,
      answer,
    };

    onAddFlashcard(newFlashcard);

    // Clear input fields
    setQuestion('');
    setAnswer('');
  };

  return (
    <div>
      <h2>Add Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={handleQuestionChange} />
        </label>
        <br />
        <label>
          Answer:
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddFlashcard;
