import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home, HomePage, CardForm } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./config/firebase";
import { setUser } from "./redux/slices/cardsSlice";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch(setUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/card-form" component={CardForm} />
        <ProtectedRoute path="/home" component={HomePage} isAuthenticated={isAuthenticated} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
