import { useContext } from "react";
import { UserContext } from "./App";
const Component2 = () => {
  const userName = useContext(UserContext);

  return (
    <>
      <h1>Component 2 - {userName}</h1>
    </>
  );
};
export default Component2;
