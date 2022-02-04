export const registerUser = (userDetails) => {
  return {
    type: "ADD_USER",
    payload: userDetails,
  };
};
export const deposit = (amount) => {
  return {
    type: "DEPOSIT",
    payload: amount,
  };
};
export const withDrawl = (amount) => {
  return {
    type: "WITHDRAWL",
    payload: amount,
  };
};
