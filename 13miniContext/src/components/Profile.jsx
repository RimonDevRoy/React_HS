import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  // The values passed to this context via setting a provider along with it are returned by useContext.
  // This is calling form Context, that is, using the value.
  // We don't need to declare user, setUser state because already did it in UserContextProvider.jsx and we are just using them here.

  if (!user) return <div>Please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
