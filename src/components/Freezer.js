import React, { useState, useEffect } from 'react';
import { getFreezer, createFreezer, updateFreezer, deleteFreezer } from './ApiService';

const Freezers = () => {
  const [freezers, setFreezers] = useEffect([]);
  const [newFreezer, setNewFreezer] = useState({ freezerNum: 0});

  useEffect(() => {
    loadFreezers();
  }, []);

  const loadFreezers = async () => {
    try {
      const response = await getFreezer();
      setFreezers(response.data);
    } catch (error) {
      console.error('Error loading freezers:', error);
    }
  };

  const handleCreateFreezer = async () => {

  };

  const handleUpdateFreezer = async () => {

  };

  const handleDeleteFreezer = async () => {
    
  };

  return (
    <div>
      <h1>Current Freezers</h1>
      <ul>
        {freezers.map((freezer) => (
          <li key={freezer.freezerId}>
            {freezer.freezerNum}
            <button onClick={() => handleUpdateFreezer(freezer.freezerId, { freezerNum: freezer.freezerNum + 1 })}>
              Update Freezer
            </button>
            <button onClick={() => handleDeleteFreezer(freezer.freezerId)}>
              Delete Freezer
            </button>
          </li>
        ))}
      </ul>
      <input 
        type="number"
        value={newFreezer.freezerNum}
        onChange={(event) => setNewFreezer({ freezerNum: event.target.valueAsNumber })}
      />
      <button onClick={handleCreateFreezer}>
        Create Freezer
      </button>
    </div>
  );
};

export default Freezers;