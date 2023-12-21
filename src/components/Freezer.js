import React, { useState, useEffect } from 'react';
import { getFreezer } from './ApiService';

const Freezers = () => {
  const [freezers, setFreezers] = useState([]);

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

  // const handleCreateFreezer = async () => {
  //   try {
  //     await createFreezer(newFreezer);
  //     loadFreezers();
  //     setNewFreezer({ freezerNum: 0 });
  //   } catch (error) {
  //     console.error('Error when creating freezer:', error);
  //   }
  // };

  // const handleUpdateFreezer = async (id, updatedFreezer) => {
  //   try {
  //     await updateFreezer(id, updatedFreezer);
  //     loadFreezers();
  //   } catch (error) {
  //     console.error('Error when updating freezer:', error);
  //   }
  // };

  // const handleDeleteFreezer = async (id) => {
  //   try {
  //     await deleteFreezer(id);
  //     loadFreezers();
  //   } catch (error) {
  //     console.error('Error when deleting freezer:', error);
  //   }
  // };

  return (
    // <div>
    //   <h1>Current Freezers</h1>
    //   <ul>
    //     {freezers.map((freezer) => (
    //       <li key={freezer.freezerId}>
    //         {freezer.freezerNum}
    //         <button onClick={() => handleUpdateFreezer(freezer.freezerId, { freezerNum: freezer.freezerNum + 1 })}>
    //           Update Freezer
    //         </button>
    //         <button onClick={() => handleDeleteFreezer(freezer.freezerId)}>
    //           Delete Freezer
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    //   <input 
    //     type="number"
    //     value={newFreezer.freezerNum}
    //     onChange={(event) => setNewFreezer({ freezerNum: event.target.valueAsNumber })}
    //   />
    //   <button onClick={handleCreateFreezer}>
    //     Create Freezer
    //   </button>
    // </div>
    <div>
      <table>
        <thread>
          <tr>
            <th>Freezers</th>
          </tr>
        </thread>
        <tbody>
          {freezers.map((freezer) => (
            <tr key={freezer.freezerId}>
              <td>{freezer.freezerNum}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Freezers;