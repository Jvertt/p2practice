import React, { useState } from 'react';
import Notepad from './Notepad';

const Notes = () => {
  const [showNotes, setShowNotes] = useState(false);

  const handleButtonClick = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className="note">
      <button className="notebtn" onClick={handleButtonClick}>
        Notes
      </button>
      {showNotes && <Notepad />}
    </div>
  );
};

export default Notes;
