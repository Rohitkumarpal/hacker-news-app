import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/organisms/Header"
import Footer from "./components/organisms/Footer"
import Stories from "./pages/stories";

export default function AppRouter() {
  const navItems = ["top", "new", "best","ask","show"];
  const Nav = [
    {
        path: "guidelines",
        name: "Guidelines",
    },
    {
        path: "faq",
        name: "FAQ",
    },
    {
        path: "list",
        name: "List",
    },
    {
        path: "api",
        name: "API",
    },
    {
        path: "legal",
        name: "Legal",
    },
    {
        path: "apply_to_yc",
        name: "Apply To YC",
    },
    {
        path: "contact",
        name: "Contact",
    }
];



  return (
    <div>
      <BrowserRouter>
      <Header navItems={navItems} />
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route path="/guidelines" exact={true} > </Route>
          <Route path="/faq" exact={true}> </Route>
          <Route path="/list" exact={true} > </Route>
          <Route path="/api" exact={true} > </Route>
          <Route path="/legal" exact={true} > </Route>
          <Route path="/apply_to_yc" exact={true} > </Route>
          <Route path="/contact" exact={true} > </Route>
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              return !navItems.includes(type) ? (
                <Redirect to="/" />
              ) : (
                <Stories type={type} />
              );
            }}
          />
        </Switch>
        <Footer footerList={Nav} />
      </BrowserRouter>
    </div>
  );
}
