import React, { useContext } from "react";
import Usercontexts from "../Usercontexts";
function Index() {
  // const message = useContext(Usercontexts);
  //this will help in getting the values that are passed by the
  // provider

  //it can also be as
  // const { value, setValue } = useContext(Usercontexts);

  //user login
  const { user, setUser } = useContext(Usercontexts);

  const login = async () => {
    return {
      id: 4,
      username: "bob",
      email: "@gmail.com",
    };
  };

  return (
    <div>
      <h3>Index</h3>
      {/* <h3>{value}</h3> */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {/* <button onClick={() => setValue("heyyyy")}>Change</button> */}
      {user ? (
        <button
          onClick={() => {
            //supoose logout
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Index;
