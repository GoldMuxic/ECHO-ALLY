import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState({ tone: '', clarity: '', pace: '' });

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message }),
    });
    const data = await res.json();
    setFeedback(data.feedback);
  };

  return (
    <div className="App">
      <h1>Echo Ally</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Speak or type here..."
      />
      <button onClick={handleSubmit}>Analyze</button>
      <div className="feedback">
        <p><strong>Tone:</strong> {feedback.tone}</p>
        <p><strong>Clarity:</strong> {feedback.clarity}</p>
        <p><strong>Pace:</strong> {feedback.pace}</p>
      </div>
    </div>
  );
}

export default App;
