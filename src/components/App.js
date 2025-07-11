import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //Set up darkmode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  //Toggle function
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  //Update class based on dark mode state
  // const appClass = isDarkMode ? "App dark" : "App light";
  const appClass = isDarkMode? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
