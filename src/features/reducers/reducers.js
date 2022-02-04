const initialState = { user: [], balance: 0 };
export const userOperation = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "DEPOSIT":
      state.balance += action.payload;

    case "WITHDRWAL":
      state.balance -= action.payload;

    default:
      return state;
  }
};
