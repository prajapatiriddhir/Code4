import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../store/selector/auth.selector";

export const PrivateRoute = ({ ...rest }) => {
  const authenticated = useSelector(isAuthenticated);

  if (authenticated) {
    return <Route {...rest} />;
  }

  return <Redirect to="/login" />;
};
