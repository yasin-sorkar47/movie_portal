import { useReducer, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Page from "./Page";
import { movieContext, themeContext } from "./context";
import { initialState, movieReducer } from "./reducers/MovieReducer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(movieReducer, initialState);
  return (
    <>
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </movieContext.Provider>
      </themeContext.Provider>
    </>
  );
}
