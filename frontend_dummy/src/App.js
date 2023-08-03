import React, { useEffect, useState } from 'react';

function App() {
  const [server_res, setServerRes] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3001/test')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setServerRes(data.message);
        })
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CLIENT WORKS</h1>
        {
          <h1>{server_res}</h1>
        }
      </header>
    </div>
  );
}

export default App;
