import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>

    // Here, children does not only refer to the direct children of UserContext but also the further descendants of it.

    // We should use 'children' prop like these if we want to use components as non-self-closing tags.

    // Here, the <UserContext.Provider> could be directly used and the children components could be directly written in place of 'children'
  );
};

export default UserContextProvider;
