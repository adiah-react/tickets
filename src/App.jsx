import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
