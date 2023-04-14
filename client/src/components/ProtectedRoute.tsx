import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

export const ProtectedRoute = ({ component }: any) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <Loading />
      </div>
    ),
  });

  return <Component />;
};
