import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });
  const firstNameHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };
  return (
    <form>
      <input type="text" value={user.firstName} onChange={firstNameHandler} />
      <input type="text" value={user.lastName} onChange={lastNameHandler} />
      <h2>my name is - {user.firstName}</h2>
      <h2>my lastName is -{user.lastName}</h2>
    </form>
  );
};

export default HookObject;
