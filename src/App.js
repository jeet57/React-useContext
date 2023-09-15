import "./styles.css";
import { createContext } from "react";
import Component1 from "./Component1";

export const UserContext = createContext();

export default function App() {
  const userName = "Jitendra";
  return (
    <UserContext.Provider value={userName}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Component1 />
      </div>
    </UserContext.Provider>
  );
}
