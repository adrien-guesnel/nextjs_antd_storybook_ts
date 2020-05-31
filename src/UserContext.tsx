import React, { useReducer, useEffect } from "react";

let reducer = (user, newUser) => {
  if (newUser === null) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("user");
    }
    return initialState;
  }
  return { ...user, ...newUser };
};

const initialState = {
  name: "",
};

let localState = initialState;

if (typeof window !== "undefined" && window.localStorage) {
  if (localStorage.getItem("user")) {
    localState = JSON.parse(localStorage.getItem("user"));
  }
}

const UserContext: React.Context<any> = React.createContext(localState);

function UserProvider(props) {
  const [user, setUser] = useReducer(reducer, localState);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
