import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function SimpleFirestoreButton() {
  const [status, setStatus] = useState('');

  const addDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, 'clickss'), { pako: 'hell' });
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button
        onClick={addDataToFirestore}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4285F4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Data to Firestore
      </button>

      <p style={{ marginTop: '10px' }}>{status}</p>
    </div>
  );
}

export default SimpleFirestoreButton;
