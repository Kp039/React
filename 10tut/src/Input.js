import colorNames from "colornames";

const Input = ({ colorValue, setColorValue, sethexValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          sethexValue(colorNames(e.target.value));
        }}
      />
      <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >Toggle Text Color</button>
    </form>
  );
};

export default Input;
