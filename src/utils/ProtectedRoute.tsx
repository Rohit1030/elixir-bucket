import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "store/userSlice";
import parseJWT from "./parseJWT";
import Setup from "components/Setup";

export type ProtectedRouteProps = {
  //   isAuthenticated: boolean;  authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({
  //   isAuthenticated,  authenticationPath,
  ...routeProps
}: ProtectedRouteProps) {
  const isAuthenticated = useSelector(userSelector).isAuthenticated;
  const token = localStorage.getItem("token");
  let isTokenValid = true;
  if (token) {
    isTokenValid = parseJWT(token).exp * 1000 > Date.now();
  }

  if (isAuthenticated) return <Route {...routeProps} />;
  else if (token && isTokenValid) return <Setup path={String(routeProps.location?.pathname)} />;
  else {
    return <Redirect to={{ pathname: "/" }} />;
  }
}
