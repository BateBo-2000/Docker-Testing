import React, { useEffect, useState } from 'react';

function App() {
  const [server_res, setServerRes] = useState(null);
  const [db_res, setDBRes] = useState(null);

  const fetchData = async (url, stateVar)=>{
    fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          stateVar(data.message);
        })
  }


  useEffect(() => {
    fetchData("http://localhost:3001/test",setServerRes)
    fetchData("http://localhost:3001/testdb",setDBRes)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CLIENT WORKS</h1>
        {
          <h1>{server_res}</h1>
        }
        {
          <h1>{db_res}</h1>
        }
      </header>
    </div>
  );
}

export default App;
