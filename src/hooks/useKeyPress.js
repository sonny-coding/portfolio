import { useState, useEffect } from "react";
function useComboKeyPress(targetKey, setKeyPressed) {
  // State for keeping track of whether key is pressed
  // const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler(event) {
    if (event.key === targetKey && event.ctrlKey) {
      event.preventDefault();
      setKeyPressed((prev) => !prev);
    }
  }
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount
  // return keyPressed;
}

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler(event) {
    if (event.key === targetKey) {
      event.preventDefault();
      setKeyPressed((prev) => !prev);
    }
  }
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}

export { useComboKeyPress, useKeyPress };
