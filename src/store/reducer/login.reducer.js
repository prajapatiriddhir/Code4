const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
};
const Reducer=  (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      };
    case "LOGOUT_ACTION":
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    default:
      return { ...state };
  }
};

export default Reducer