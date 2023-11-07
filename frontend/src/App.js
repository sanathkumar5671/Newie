import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      {data && <p>Data from Django: {data.key}</p>}
    </div>
  );
}

export default App;
