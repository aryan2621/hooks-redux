import React, { useContext } from "react";
import Usercontexts from "../Usercontexts";

// in similar fasghon it is available to the about us page tooo
function About() {
  //   const message = useContext(Usercontexts);
  //it can also be define as this way when we use the state method in provider page
//   const { value, setValue } = useContext(Usercontexts);

const { user, setUser} = useContext(Usercontexts);


  return (
    <div>
      <h3>About</h3>
      {/* {value} */}
      <pre>
        {JSON.stringify(user,null,2)}
      </pre>
    </div>
  );
}

export default About;
