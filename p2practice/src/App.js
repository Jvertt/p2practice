// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlashcardList from './FlashcardList';
import AddFlashcard from './AddFlashcard';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    try {
      const response = await fetch('http://localhost:3000/flashcards');
      const data = await response.json();
      setFlashcards(data);
    } catch (error) {
      console.log('Error fetching flashcards:', error);
    }
  };

  const handleDeleteFlashcard = async (id) => {
    try {
      await fetch(`http://localhost:3000/flashcards/${id}`, {
        method: 'DELETE',
      });
      setFlashcards((prevFlashcards) =>
        prevFlashcards.filter((flashcard) => flashcard.id !== id)
      );
    } catch (error) {
      console.log('Error deleting flashcard:', error);
    }
  };

  const handleAddFlashcard = async (flashcard) => {
    try {
      const response = await fetch('http://localhost:3000/flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(flashcard),
      });
      const newFlashcard = await response.json();
      setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
    } catch (error) {
      console.log('Error adding flashcard:', error);
    }
  };

  return (
    <Router>
      <div className="app">
        <h1>Flashcard App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Flashcard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<FlashcardList flashcards={flashcards} onDeleteFlashcard={handleDeleteFlashcard} />} />
          <Route path="/add" element={<AddFlashcard onAddFlashcard={handleAddFlashcard} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
