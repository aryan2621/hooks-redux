export const increment = (nul) => {
  return {
    type: "INCREMENT",
    payload: nul,
    //payload and argument is for variating the
    //outcome based on the passed input
    //thts is  the concept of payload
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
