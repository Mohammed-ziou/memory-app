import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

const App = () => {
  return (
    <Container maxWidth="md">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </Container>
  );
};

export default App;
