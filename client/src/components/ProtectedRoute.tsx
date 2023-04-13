import { withAuthenticationRequired } from "@auth0/auth0-react";
import ReactNode from "react";

export const ProtectedRoute = ({ component }: any) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <h1>LOADING</h1>
      </div>
    ),
  });

  return <Component />;
};
