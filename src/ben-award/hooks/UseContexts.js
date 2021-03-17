import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Usercontexts from "./Usercontexts";

function UseContexts() {
  // const [value, setValue] = useState("hello from the context");
  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <br />
              <Link to="/about/">About</Link>
            </ul>
          </nav>
          {/* here we are wrapping the whole application inside the single component */}
          {/* so that the passing value like value can be pass thrugh different levels  */}

          {/* <Usercontexts.Provider value={{value,setValue}}> */}
          <Usercontexts.Provider value={{ user, setUser }}>
            <Route path="/" exact component={Index} />
            <Route path="/about/" exact component={About} />
          </Usercontexts.Provider>
        </div>
      </Router>
    </div>
  );
}

export default UseContexts;
