const initialState = {
  loginstatus: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERLOGGEDIN":
      return {
        ...state,
        loginstatus: true,
      };
    case "USERLOGOUT":
      return {
        ...state,
        loginstatus: false,
      };
    default:
      return state;
  }
};
