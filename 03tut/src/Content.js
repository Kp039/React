const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave", "Bhoomi"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
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
      <p onDoubleClick={handleClick}> Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click IT</button>
      <button onClick={() => handleClick2("Dave")}>Click IT</button>
      <button onClick={(e) => handleClick3(e)}>Click IT</button>
      
    </main>
  );
};

export default Content