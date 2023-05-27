import React, { useState } from 'react';

const Flashcard = ({ question, answer, onDelete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      <div className="flashcard-header">
        <div className="dot-container">
          <div className="dot dot-red" onClick={handleDelete}></div>
          <div className="dot dot-yellow"></div>
          <div className="dot dot-green"></div>
        </div>
      </div>
      <div className="flashcard-content">
        <div className={`flashcard-question ${showAnswer ? 'hidden' : ''}`}>
          {question}
        </div>
        <div className={`flashcard-answer ${showAnswer ? '' : 'hidden'}`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
