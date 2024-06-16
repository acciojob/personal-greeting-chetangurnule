
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
      <input type="text" onChange={(e) => onNameChangeHandler(e)} />
      {firstName && <p>Hello {firstName}!</p>}
    </div>
  )
}

export default App
