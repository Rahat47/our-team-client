import { Redirect, Route } from "react-router";

function PrivateRoute({ children, ...rest }) {
    const loggedInUser = true

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


export default PrivateRoute