import { useState } from "react";

const Content = () => {
  const [name, setname] = useState('Bhoomi')
  
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave", "Bhoomi"];
    const int = Math.floor(Math.random() * 4);
    setname(names[int]);
  };

  const handleClick = () => {
    console.log("You clicked it")
  }

  const handleClick2 = (name) => {
    console.log(`${name} clicked it`)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }
  
  return (
    <main>
      <p onDoubleClick={handleClick}> Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={() => handleClick2("Dave")}>Click IT</button>
      <button onClick={(e) => handleClick3(e)}>Click IT</button>
      
    </main>
  );
};

export default Content
