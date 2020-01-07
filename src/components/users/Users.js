import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/GithubContext";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

const Users = () => {
  const githubContext = useContext(GithubContext);
  
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user, index) => (
          <UserItem key={user.id + index} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
