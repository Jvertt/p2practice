import React from 'react';

const Notepad = () => {
  return (
    <div className="notepad">
      <div className="notepad-header">
        <div className="notepad-title">Notepad</div>
      </div>
      <div className="notepad-content">
        <textarea className="notepad-textarea" rows="10" cols="30" placeholder="type notes..."></textarea>
      </div>
    </div>
  );
};

export default Notepad;
