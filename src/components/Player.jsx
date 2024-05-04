import React, { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name); // Initialize state with prop value

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  function handleSaveClick() {
    setIsEditing(false);
    
  }

  return (
    <li>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleInputChange}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
      </span>
      <button onClick={isEditing ? handleSaveClick : handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
