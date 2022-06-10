import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/headers";
import Stories from "./pages/stories";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              return !["top", "new", "best","ask","show"].includes(type) ? (
                <Redirect to="/" />
              ) : (
                <Stories type={type} />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
