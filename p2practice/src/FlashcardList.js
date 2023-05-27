import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, onDeleteFlashcard }) => {
  return (
    <div>
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          question={flashcard.question}
          answer={flashcard.answer}
          onDelete={() => onDeleteFlashcard(flashcard.id)}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
