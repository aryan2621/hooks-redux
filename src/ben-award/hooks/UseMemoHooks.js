import React, { useMemo, useState } from "react";
import useFetch from "./Usefetch";

const computeLongWord = (data) => {
  if (!data) return [];
  else {
    let lgWord = "";
    JSON.parse(data).forEach((sentence) => {
      sentence.split(" ").forEach((word) => {
        if (word.length > lgWord.length) {
          lgWord = word;
        }
      });
    });
    return lgWord;
  }
};

function UseMemoHooks() {
  const [count, setCount] = useState(0);

  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  ////////USEMEMO///////
  //helps in the conndition to optimise the compiuted propertises
  //not used at the start but if thinks as the it is slow then focus on it for using
  //task is to findout the largest word
  //we are recomputing the value even after the it get calculated

  //usen of the memo
  const lgwords = useMemo(() => computeLongWord(data), [data, computeLongWord]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Inc</button>
      <div>{lgwords}</div>
    </div>
  );
}

export default UseMemoHooks;
