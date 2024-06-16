
import React from "react";
import './../styles/App.css';

const App = () => {
  const [firstName, setFirstName] = useState(null);
  
  function onNameChangeHandler(e) {
    const { value } = e.target;
    setFirstName(value);
  }
  
  return (
    <div>
      <label htmlFor="inputTag">Enter your Name:</label>
      <input type="text" id = "inputTag" onChange={(e) => onNameChangeHandler(e)} />
      {firstName && <p>Hello {firstName}!</p>}
    </div>
  )
}

export default App
