import React, { createContext } from "react";

//this is the user that will be available to all the poages if the
//user satisfy some crieteria  of remaining login if having the jwt
//it simplay first make a context then wrap the whole app to that prvider so that that value is avialble to the whole aplication
//and then for accesting use the usecontxet

const Usercontexts = createContext(null);
export default Usercontexts;
