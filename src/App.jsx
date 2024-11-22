import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<PrivateRoute />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
