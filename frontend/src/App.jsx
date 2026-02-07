import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api")
      .then((response) => response.json())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <div className="App">
      <h1>Message from Django Backend:</h1>
      <p>{message.message || 'Loading...'}</p>
    </div>
  );
}

export default App;